//--------------------------------import the dependences
import React, { useState } from "react";
import api from "../../services/api";

//--------------------------------import the styles
import { Content, Button } from "./styles";

//--------------------------------import the components
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { MdDone, MdClose } from "react-icons/md";

function NewOrder() {
   //--------------------------------Create the constants
   const formFieldsData = [
      { id: "boardQuantity", title: "Quantidade de placas" },
      { id: "capQuantity", title: "Quantidade de tampas" },
      { id: "inoculationTemp", title: "Temp. max. de inoculação" },
      { id: "operator", title: "Operador" },
      { id: "boardLot", title: "Lote da placa" },
      { id: "bdaLot", title: "Lote BDA (Ágar)" },
      { id: "fungusLot", title: "Lote Fungo" },
   ];
   const initialFormValues = {
      boardQuantity: "",
      capQuantity: "",
      inoculationTemp: "",
      operator: "",
      boardLot: "",
      bdaLot: "",
      fungusLot: "",
   };

   //--------------------------------Create the states
   const [insideButton, setInsideButton] = useState({ icon: "", message: "Cadastrar" });
   const [loading, setLoading] = useState(false);
   const [formData, setFormData] = useState(initialFormValues);
   const [errorMsg, setErrorMsg] = useState("");

   //--------------------------------function to take the input fields
   function changeFormHandle(e) {
      setFormData({ ...formData, [e.target.id]: e.target.value });
   }

   //--------------------------------verify if is an empty field
   function errorTest(e) {
      console.log("chega erro");
      e.preventDefault();
      setErrorMsg("");

      let x = false;
      Object.keys(formData).forEach((item) => {
         if (formData[item] === "") {
            x = true;
         }
      });

      if (x) {
         setErrorMsg("Todos os campos devem ser preenchidos!!!");
         return;
      }

      saveFormData();
   }

   //--------------------------------function to handle the form
   async function saveFormData() {
      console.log("envia form");

      setLoading(true);
      setInsideButton({ icon: <CircularProgress style={{ width: "30px", height: "30px", margin: "10px" }} />, message: "Criarndo Ordem" });

      try {
         console.log("envia form try");

         const { data } = await api.post("/order", formData);

         if (data.response) {
            setInsideButton({ icon: <MdDone style={{ width: "30px", height: "30px", margin: "10px", color: "green" }} />, message: "Ordem criada" });
         } else {
            setInsideButton({ icon: <MdClose style={{ width: "30px", height: "30px", margin: "10px", color: "red" }} />, message: "Algo deu errado!!" });
         }
      } catch (error) {
         setInsideButton({
            icon: <MdClose style={{ width: "30px", height: "30px", margin: "10px", color: "red" }} />,
            message: "Algo deu errado!! " + error.message,
         });
      }

      setTimeout(() => {
         document.getElementById("orderForm").reset();
         setFormData(initialFormValues);
         setInsideButton({ icon: "", message: "Cadastrar" });
         setLoading(false);
      }, 1500);
   }

   //--------------------------------creating the form fields
   const defaltFormFields = formFieldsData.map((val, key) => (
      <Grid item xs={6} key={key}>
         <p>{val.title}</p>
         <input type="text" id={val.id} placeholder="digite.." onChange={changeFormHandle} defaultValue={formData[val.id]} />
      </Grid>
   ));

   return (
      <Content>
         <h1>Inserir nova ordem</h1>

         <form onSubmit={errorTest} id="orderForm">
            <Grid container spacing={3}>
               {errorMsg === "" ? "" : <p className="error">{errorMsg}</p>}
               {defaltFormFields}
            </Grid>

            <Button isLoading={loading}>
               {insideButton.icon}
               {insideButton.message}
            </Button>
         </form>
      </Content>
   );
}

export default NewOrder;
