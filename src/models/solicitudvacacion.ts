export class SolicitudVacacion 
{

    constructor(
        public Cod_personal: string,        
        public SolicitudId: number,        
        public SolicitudFecha: string,  
        public SolicitudFechaInicio: Date,
        public SolicitudFechaFin: Date,    
        public SolicitudDias: number,     
        public SolicitudIsContinua: boolean,   
        public SolicitudAprobada: boolean,         
        public SolicitudEstado: boolean,        
        public Usuario: number,      
        public SolicitudFechaInicioRevisada: string,           
        public SolicitudFechaFinRevisada: string,           
        public SolicitudDiasRevisada: number,           
        public SolicitudObservacion: string,           
        public SolicitudCode: string,           
        public SolicitudTipo: string,           
        public CronogramaId: number
    ) 
    {

    }
  
    
}
  