//--------------------------------import the dependences
import React, { useState, useCallback, useEffect } from "react";
import api from "../../services/api";
import moment from "moment";

//--------------------------------import the styles
import { HeaderContent, BodyContent, Details, ProductivityContainer, CardContainer } from "./styles";

//--------------------------------import the components
import Card from "../../components/card";
import { GoSearch } from "react-icons/go";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import { Spring } from "react-spring/renderprops";
import img from "../../assets/doubt.png";

//--------------------------------styling the grid material ui
const useStyles = makeStyles({
   root: { height: "calc(100vh - 28px)" },
   modifiedHeight: { height: "100%" },
});

function Hisyory() {
   //--------------------------------Create the constants
   const classes = useStyles();

   //--------------------------------Create the states
   const [isLoading, setIsLoading] = useState(true);
   const [dataList, setDataList] = useState([]);
   const [selectedCard, setSelectedCard] = useState(null);

   //--------------------------------fetch the initial state
   useEffect(() => {
      async function initialData() {
         const { data } = await api.get("/orders");
         console.log(data);
         setDataList(data);
         setIsLoading(false);
      }
      initialData();
   }, []);

   //--------------------------------set the selected card to show propriety
   function selectCard(i) {
      setSelectedCard(i);
   }

   const Productivity = ({ color, w }) => (
      <ProductivityContainer color={color} w={w}>
         <div className="background" />
         <div className="colorful">90%</div>
      </ProductivityContainer>
   );

   const OrderDetail = useCallback(
      () => (
         <Details>
            <h1>Detalhes da ordem</h1>
            {selectedCard === null ? (
               <h2>Nenhuma ordem selecionada</h2>
            ) : (
               <Grid container direction="column" classes={{ root: classes.modifiedHeight }}>
                  <p>
                     Ordem: <span>{dataList[selectedCard].num_order}</span>
                  </p>
                  <p>
                     Lote da placa: <span>{dataList[selectedCard].boardLot}</span>
                  </p>
                  <p>
                     Lote da BDA: <span>{dataList[selectedCard].bdaLot}</span>
                  </p>
                  <p>
                     Lote do Fungo: <span>{dataList[selectedCard].fungusLot}</span>
                  </p>
                  <p>
                     Operador: <span>{dataList[selectedCard].operator}</span>
                  </p>

                  <p>
                     inicio: <span>{moment(dataList[selectedCard].start).format("DD/MM - hh:mm")}</span>
                  </p>
                  <p>
                     Termino: <span>{dataList[selectedCard].end}</span>
                  </p>
                  <p>
                     Qtde produzida: <span>{dataList[selectedCard].EQtde}</span>
                  </p>
                  <p>Produtividade:</p>
                  <Spring from={{ w: "0%" }} to={{ w: "90%" }}>
                     {(props) => <Productivity color="#00B050" w={props.w} />}
                  </Spring>
                  <p className="orderDetails">Relatorio completo</p>
               </Grid>
            )}
         </Details>
      ),
      [classes.modifiedHeight, selectedCard, dataList]
   );

   const list = dataList.map((val, key) => (
      <Grid item sm={3} key={key}>
         <Card selected={key === selectedCard ? true : false} onClick={() => selectCard(key)}>
            <CardContainer start={val.start} end={val.end} IQtde={val.IQtde} EQtde={val.EQtde} order={val.order}>
               <p className="order">Ordem:</p>
               <p className="orderNumber">{val.num_order}</p>

               <p className="qtdeP">
                  Qtde Produzida: <span>{val.EQtde}</span>
               </p>
               <p className="date">
                  Inicio: <span>{moment(val.start).format("DD/MM - hh:mm")}</span>
               </p>
            </CardContainer>
         </Card>
      </Grid>
   ));

   const SkeletonList = () => {
      let x = [];
      for (let i = 0; i < 8; i++) {
         x.push(
            <Grid item sm={3} key={"skeleton" + i}>
               <Card>
                  <Skeleton animation="wave" width={60} height={25} style={{ padding: " 3px 0" }} />
                  <Skeleton animation="wave" width={40} height={36} style={{ margin: "0px auto", padding: " 3px 0" }} />
                  <Skeleton animation="wave" width={100} height={15} style={{ padding: " 3px 0" }} />
                  <Skeleton animation="wave" width={100} height={15} style={{ padding: " 3px 0" }} />
               </Card>
            </Grid>
         );
      }
      return x;
   };

   return (
      <Grid container classes={{ root: classes.root }}>
         <Grid item sm={9} classes={{ root: classes.root }}>
            {/* *********** order page header ****************/}
            <Grid container>
               <HeaderContent>
                  <Grid item sm={8}>
                     <h1>Ordens</h1>
                  </Grid>
                  <Grid item sm={4}>
                     <input type="text" placeholder="pesquise uma ordem..." />
                     <GoSearch className="searchIcon" />
                  </Grid>
               </HeaderContent>
            </Grid>
            {/* *********** order page header*************** */}

            {/* *********** order page body*************** */}
            <BodyContent>
               <Grid container spacing={3}>
                  {isLoading ? (
                     <SkeletonList />
                  ) : dataList.length === 0 ? (
                     <>
                        <h2>Nenhuma ordem finalizada</h2>
                        <Grid item sm={12}>
                           <img className="imgFetchResult" src={img} alt="Nothing to see" />
                        </Grid>
                     </>
                  ) : (
                     list
                  )}
               </Grid>
            </BodyContent>
            {/* *********** order page body*************** */}
         </Grid>

         {/* *********** order detail *************** */}
         <Grid item sm={3}>
            <OrderDetail />
         </Grid>
         {/* *********** order detail *************** */}
      </Grid>
   );
}

export default Hisyory;
