//--------------------------------import the dependences
import React, { useState, useEffect } from "react";
import api from "../../services/api";
import moment from "moment";

//--------------------------------import the styles
import { HeaderContent, BodyContent, Details, Backdrop, ConfirmCloseOrder } from "./styles";

//--------------------------------import the components
import Grid from "@material-ui/core/Grid";
import Switch from "./switch";
// import Graf from "./graphDetail/historyGraph";
import LinearGraph from "./graphDetail/LinearGraph";
import DonutGraph from "./graphDetail/DonutGraph";
import Term from "./graphDetail/Term";
import { makeStyles } from "@material-ui/core/styles";
import { TiWarningOutline} from "react-icons/ti";
import { MdDone,MdClose } from "react-icons/md";
import Card from "../../components/card";

const useStyles = makeStyles({
   root: {
      height: "calc(100vh - 28px)",
   },
   modifiedHeight: {
      height: "100%",
   },
});

function Index() {
   const classes = useStyles();
   const [currentOrder, setCurrentOrder] = useState({});
   const [currentAlarm, setCurrentAlarm] = useState([]);
   const [machineState, setMachineState] = useState({});
   const [historyData, setHistoryData] = useState([]);
   const [emptyOrder, setemptyOrder] = useState("MAQUINA DESLIGADA");
   const [confirmCloseOrder, setConfirmCloseOrder] = useState(false);
   useEffect(() => {
      async function getOrder() {
         const { data } = await api.get("/currentOrder");
         if (data.length !== 0) {
            setCurrentOrder(data[0]);
            getAlarm();
            getMachine();
            history();
         }
      }


      getOrder();
      const loop = setInterval(() => {
         getOrder();
      }, 5000);

      return () => {
         clearInterval(loop);
      };
   }, []);

   

   async function getAlarm() {
      const { data } = await api.get("/alarms");
      setCurrentAlarm(data);
   }

   async function getMachine() {
      const { data } = await api.get("/machine");
      setMachineState(data[0]);
   }

   async function startOrEndOrder() {
      if (machineState.machine) {
         return setConfirmCloseOrder(true);
      }
      changeMachineState()
   }

   async function changeMachineState() {
      const { data } = await api.put("/machine");
      setemptyOrder(data);
      getMachine();
   }

   async function history() {
      const { data } = await api.get("/historyproduction");
      setHistoryData(data);
   }

   const alarmList = currentAlarm.map((val, key) => (
      <p key={"alarm" + key}>
         <TiWarningOutline />
         <span>{val.description}</span>
         <span>{val.time}</span>
      </p>
   ));

   return (
      <Grid container classes={{ root: classes.root }}>
         <Grid item sm={9} classes={{ root: classes.root }}>
            {/* *********** order page header ****************/}
            <Grid container>
               <HeaderContent>
                  <Grid item sm={12}>
                     <h1>Acompanhamento</h1>
                  </Grid>
               </HeaderContent>
            </Grid>
            {/* *********** order page header*************** */}

            {/* *********** order page body*************** */}
            <BodyContent>
               <Grid container spacing={2}>
                  <Grid item sm={4}>
                     <Card>
                        <h2>Detalhes</h2>
                        <p className="info">
                           Inicio: <span>{moment(currentOrder.start).format("DD/MM - HH:mm")}</span>
                        </p>
                        <p className="info">
                           Qtde Prevista: <span>{currentOrder.IQtde}</span>
                        </p>
                        <p className="info">
                           Operador: <span>{currentOrder.operator}</span>
                        </p>
                        <p className="info">
                           Temp. max: <span>{currentOrder.inoculationTemp}°C</span>
                        </p>
                        <p className="info">
                           Lote da placa: <span>{currentOrder.boardLot}</span>
                        </p>
                        <p className="info">
                           Lote BDA (Ágar): <span>{currentOrder.bdaLot}</span>
                        </p>
                        <p className="info">
                           Lote Fungo: <span>{currentOrder.fungusLot}</span>
                        </p>
                     </Card>
                  </Grid>
                  <Grid item sm={4}>
                     <Card>
                        <h2>Temperatura Ágar</h2>
                        <Term
                           //  value={45}
                           //  ideal={40}
                           value={machineState.temperature}
                           ideal={currentOrder.inoculationTemp}
                        />
                     </Card>
                  </Grid>
                  <Grid item sm={4}>
                     <Card>
                        <h2>Produtividade</h2>
                        <DonutGraph dado={historyData} />
                     </Card>
                  </Grid>

                  <Grid item sm={12}>
                     <Card>
                        <h2>Histoico produtos x temperatura</h2>
                        <div style={{ height: "200px", width: "100%" }}>
                           <LinearGraph dados={historyData} ideal={currentOrder.inoculationTemp} />
                          
                        </div>
                     </Card>
                  </Grid>
               </Grid>
            </BodyContent>
            {/* *********** order page body*************** */}
         </Grid>

         {/* *********** order detail *************** */}
         <Grid item sm={3}>
            <Details>
               <div className="energizer">
                  <Switch status={machineState.machine}  onClick={startOrEndOrder} />
                  <ConfirmCloseOrder show={confirmCloseOrder} >
                     <span>Tem certeza?</span>
                     <p onClick={changeMachineState} ><MdDone color='#B4DFD5' /></p>
                     <p onClick={()=>setConfirmCloseOrder(false)}><MdClose color='#d265618c'/></p>
                  </ConfirmCloseOrder>
               </div>
               <div className="card">
                  <p>
                     Ordem:
                     <span>{currentOrder.num_order}</span>
                  </p>
                  <p>
                     Qtde Produzida
                     <span>{historyData.length}</span>
                  </p>
               </div>
               <div className="alarms">
                  <h2>Alarmes</h2>
                  <div className="alarmsContainer">{alarmList}</div>
               </div>
            </Details>
         </Grid>
         {/* *********** order detail *************** */}

         {machineState.machine ? (
            ""
         ) : (
            <Backdrop>
               <h1>{emptyOrder}</h1>
            </Backdrop>
         )}
      </Grid>
   );
}

export default Index;
