/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     8/11/2022 5:25:24 PM                         */
/*==============================================================*/


drop table if exists ADMINISTRADOR;

drop table if exists CURSO;

drop table if exists DOCENTE;

drop table if exists ESTUDIANTE;

drop table if exists INSUMO;

drop table if exists INSUMOB;

drop table if exists INSUMOC;

drop table if exists MATERIA;

drop table if exists MATRICULA;

drop table if exists NOTA;

drop table if exists NOTAB;

drop table if exists NOTAC;

drop table if exists PERIODO;

drop table if exists SUBIRNOTA;

/*==============================================================*/
/* Table: ADMINISTRADOR                                         */
/*==============================================================*/
create table ADMINISTRADOR
(
   ID_ADMINISTRADOR     int not null auto_increment,
   CORREO_ADMINISTRADOR varchar(500) not null,
   CONTRASENA_ADMINISTRADOR text not null,
   primary key (ID_ADMINISTRADOR)
);

/*==============================================================*/
/* Table: CURSO                                                 */
/*==============================================================*/
create table CURSO
(
   ID_CURSO             int not null auto_increment,
   CODIGO_CURSO         varchar(10) not null,
   CURSO                text not null,
   PARALELO             varchar(10) not null,
   ESTADO_CURSO         int not null,
   PERIODO              text not null,
   primary key (ID_CURSO)
);

/*==============================================================*/
/* Table: DOCENTE                                               */
/*==============================================================*/
create table DOCENTE
(
   ID_DOCENTE           int not null auto_increment,
   CODIGO_DOCENTE       varchar(10) not null,
   NOMBRE_DOCENTE       text not null,
   APELLIDO_DOCENTE     text not null,
   CORREO_DOCENTE       varchar(500) not null,
   CONTRASENA_DOCENTE   text not null,
   CEDULA_DOCENTE       varchar(10) not null,
   CELULAR_DOCENTE      varchar(10) not null,
   ESTADO_DOCENTE       int not null,
   primary key (ID_DOCENTE)
);

/*==============================================================*/
/* Table: ESTUDIANTE                                            */
/*==============================================================*/
create table ESTUDIANTE
(
   ID_ESTUDIANTE        int not null auto_increment,
   CODIGO_ESTUDIANTE    varchar(10) not null,
   NOMBRE_ESTUDIANTE    text not null,
   APELLIDO_ESTUDIANTE  text not null,
   CEDULA_ESTUDIANTE    varchar(10) not null,
   CONTRASENA_ESTUDIANTE text not null,
   CORREO_ESTUDIANTE    varchar(500) not null,
   CELULAR_ESTUDIANTE   varchar(10) not null,
   ESTADO_ESTUDIANTE    int not null,
   primary key (ID_ESTUDIANTE)
);

/*==============================================================*/
/* Table: INSUMO                                                */
/*==============================================================*/
create table INSUMO
(
   ID_INSUMO            int not null auto_increment,
   ID_MATERIA           int,
   DESCINSUMO1          text,
   DESCINSUMO2          text,
   DESCINSUMO3          text,
   DESCINSUMO4          text,
   DESCINSUMO5          text,
   DESCINSUMO6          text,
   DESCINSUMO7          text,
   DESCINSUMO8          text,
   DESCINSUMO11         text,
   DESCINSUMO22         text,
   DESCINSUMO33         text,
   DESCINSUMO44         text,
   DESCINSUMO55         text,
   DESCINSUMO66         text,
   DESCINSUMO77         text,
   DESCINSUMO88         text,
   PERIODO              text,
   primary key (ID_INSUMO)
);

/*==============================================================*/
/* Table: INSUMOB                                               */
/*==============================================================*/
create table INSUMOB
(
   ID_INSUMOB           int not null auto_increment,
   ID_MATERIA           int,
   DESCQ1P1INSUMO1      text,
   DESCQ1P1INSUMO2      text,
   DESCQ1P1INSUMO3      text,
   DESCQ1P1INSUMO4      text,
   DESCQ1P1INSUMO5      text,
   DESCQ1P1INSUMO6      text,
   DESCQ1P2INSUMO1      text,
   DESCQ1P2INSUMO2      text,
   DESCQ1P2INSUMO3      text,
   DESCQ1P2INSUMO4      text,
   DESCQ1P2INSUMO5      text,
   DESCQ1P2INSUMO6      text,
   DESCQ1P3INSUMO1      text,
   DESCQ1P3INSUMO2      text,
   DESCQ1P3INSUMO3      text,
   DESCQ1P3INSUMO4      text,
   DESCQ1P3INSUMO5      text,
   DESCQ1P3INSUMO6      text,
   DESCQ2P1INSUMO1      text,
   DESCQ2P1INSUMO2      text,
   DESCQ2P1INSUMO3      text,
   DESCQ2P1INSUMO4      text,
   DESCQ2P1INSUMO5      text,
   DESCQ2P1INSUMO6      text,
   DESCQ2P2INSUMO1      text,
   DESCQ2P2INSUMO2      text,
   DESCQ2P2INSUMO3      text,
   DESCQ2P2INSUMO4      text,
   DESCQ2P2INSUMO5      text,
   DESCQ2P2INSUMO6      text,
   DESCQ2P3INSUMO1      text,
   DESCQ2P3INSUMO2      text,
   DESCQ2P3INSUMO3      text,
   DESCQ2P3INSUMO4      text,
   DESCQ2P3INSUMO5      text,
   DESCQ2P3INSUMO6      text,
   PERIODO              text,
   primary key (ID_INSUMOB)
);

/*==============================================================*/
/* Table: INSUMOC                                               */
/*==============================================================*/
create table INSUMOC
(
   ID_INSUMOC           int not null auto_increment,
   ID_MATERIA           int,
   DESCPUFORO           text,
   DESCPUTAREA1         text,
   DESCPUTAREA2         text,
   DESCPUTAREA3         text,
   DESCPUTAREA4         text,
   DESCSUFORO           text,
   DESCSUTAREA1         text,
   DESCSUTAREA2         text,
   DESCSUTAREA3         text,
   DESCSUTAREA4         text,
   DESCTUFORO           text,
   DESCTUTAREA1         text,
   DESCTUTAREA2         text,
   DESCTUTAREA3         text,
   DESCTUTAREA4         text,
   DESCCUFORO           text,
   DESCCUTAREA1         text,
   DESCCUTAREA2         text,
   DESCCUTAREA3         text,
   DESCCUTAREA4         text,
   PERIODO              text,
   DESCQUFORO           text,
   DESCQUTAREA1         text,
   DESCQUTAREA2         text,
   DESCQUTAREA3         text,
   DESCQUTAREA4         text,
   primary key (ID_INSUMOC)
);

/*==============================================================*/
/* Table: MATERIA                                               */
/*==============================================================*/
create table MATERIA
(
   ID_MATERIA           int not null auto_increment,
   ID_DOCENTE           int,
   ID_CURSO             int,
   CODIGO_MATERIA       text not null,
   NOMBRE_MATERIA       text not null,
   PERIODO              text not null,
   ESTADO_MATERIA       int not null,
   primary key (ID_MATERIA)
);

/*==============================================================*/
/* Table: MATRICULA                                             */
/*==============================================================*/
create table MATRICULA
(
   ID_MATRICULA         int not null auto_increment,
   ID_ESTUDIANTE        int,
   ID_CURSO             int,
   CODIGO_MATRICULA     text not null,
   PERIODO              text not null,
   FECHA_MATRICULA      date not null,
   ESTADO_MATRICULA     int not null,
   primary key (ID_MATRICULA)
);

/*==============================================================*/
/* Table: NOTA                                                  */
/*==============================================================*/
create table NOTA
(
   ID_NOTA              int not null auto_increment,
   ID_ESTUDIANTE        int,
   ID_MATERIA           int,
   INSUMO1              float,
   INSUMO2              float,
   INSUMO3              float,
   INSUMO4              float,
   INSUMO5              float,
   INSUMO6              float,
   INSUMO7              float,
   INSUMO8              float,
   EXAMEN1              float,
   INSUMO11             float,
   INSUMO22             float,
   INSUMO33             float,
   INSUMO44             float,
   INSUMO55             float,
   INSUMO66             float,
   INSUMO77             float,
   INSUMO88             float,
   EXAMEN2              float,
   EXAMENSUPLETORIO     float,
   EXAMENREMEDIAL       float,
   EXAMENGRACIA         float,
   PERIODO              text,
   PT                   float,
   primary key (ID_NOTA)
);

/*==============================================================*/
/* Table: NOTAB                                                 */
/*==============================================================*/
create table NOTAB
(
   ID_NOTAB             int not null auto_increment,
   ID_ESTUDIANTE        int,
   ID_MATERIA           int,
   Q1P1INSUMO1          float,
   Q1P1INSUMO2          float,
   Q1P1INSUMO3          float,
   Q1P1INSUMO4          float,
   Q1P1INSUMO5          float,
   Q1P1INSUMO6          float,
   Q1P2INSUMO3          float,
   Q1P2INSUMO4          float,
   Q1P2INSUMO5          float,
   Q1P2INSUMO6          float,
   Q1P2INSUMO1          float,
   Q1P2INSUMO2          float,
   Q1P3INSUMO2          float,
   Q1P3INSUMO3          float,
   Q1P3INSUMO4          float,
   Q1P3INSUMO5          float,
   Q1P3INSUMO6          float,
   EXAMEN1              float,
   Q2P1INSUMO1          float,
   Q2P1INSUMO2          float,
   Q2P1INSUMO3          float,
   Q2P1INSUMO4          float,
   Q2P1INSUMO5          float,
   Q2P1INSUMO6          float,
   Q2P2INSUMO1          float,
   Q2P2INSUMO2          float,
   Q2P2INSUMO3          float,
   Q2P2INSUMO4          float,
   EXAMEN2              float,
   EXAMENSUPLETORIO     float,
   EXAMENREMEDIAL       float,
   EXAMENGRACIA         float,
   PERIODO              text,
   PT                   float,
   Q1P3INSUMO1          float,
   Q2P2INSUMO5          float,
   Q2P2INSUMO6          float,
   Q2P3INSUMO1          float,
   Q2P3INSUMO2          float,
   Q2P3INSUMO3          float,
   Q2P3INSUMO4          float,
   Q2P3INSUMO5          float,
   Q2P3INSUMO6          float,
   primary key (ID_NOTAB)
);

/*==============================================================*/
/* Table: NOTAC                                                 */
/*==============================================================*/
create table NOTAC
(
   ID_NOTAC             int not null auto_increment,
   ID_MATERIA           int,
   ID_ESTUDIANTE        int,
   PUFORO               float,
   PUTAREA1             float,
   PUTAREA2             float,
   PUTAREA3             float,
   PUTAREA4             float,
   PUEXAMEN             float,
   SUFORO               float,
   SUTAREA1             float,
   SUTAREA2             float,
   SUTAREA3             float,
   SUTAREA4             float,
   SUEXAMEN             float,
   TUFORO               float,
   TUTAREA1             float,
   TUTAREA2             float,
   TUTAREA3             float,
   TUTAREA4             float,
   TUEXAMEN             float,
   CUFORO               float,
   CUTAREA1             float,
   CUTAREA2             float,
   CUTAREA3             float,
   CUTAREA4             float,
   CUEXAMEN             float,
   QUFORO               float,
   QUTAREA1             float,
   QUTAREA2             float,
   QUTAREA3             float,
   QUTAREA4             float,
   QUEXAMEN             float,
   EXAMENFINAL          float,
   PT                   float,
   EXAMENSUPLETORIO     float,
   EXAMENREMEDIAL       float,
   EXAMENGRACIA         float,
   PERIODO              text,
   primary key (ID_NOTAC)
);

/*==============================================================*/
/* Table: PERIODO                                               */
/*==============================================================*/
create table PERIODO
(
   ID_PERIODO           int not null auto_increment,
   PERIODO              text not null,
   primary key (ID_PERIODO)
);

/*==============================================================*/
/* Table: SUBIRNOTA                                             */
/*==============================================================*/
create table SUBIRNOTA
(
   ID_SUBIRNOTA         int not null auto_increment,
   ESTADO_SUBIRNOTA     int not null,
   primary key (ID_SUBIRNOTA)
);

alter table INSUMO add constraint FK_MATERIA_INSUMO foreign key (ID_MATERIA)
      references MATERIA (ID_MATERIA) on delete restrict on update restrict;

alter table INSUMOB add constraint FK_MATERIA_INSUMOB foreign key (ID_MATERIA)
      references MATERIA (ID_MATERIA) on delete restrict on update restrict;

alter table INSUMOC add constraint FK_RELATIONSHIP_13 foreign key (ID_MATERIA)
      references MATERIA (ID_MATERIA) on delete restrict on update restrict;

alter table MATERIA add constraint FK_CURSO_MATERIA foreign key (ID_CURSO)
      references CURSO (ID_CURSO) on delete restrict on update restrict;

alter table MATERIA add constraint FK_DOCENTE_MATERIA foreign key (ID_DOCENTE)
      references DOCENTE (ID_DOCENTE) on delete restrict on update restrict;

alter table MATRICULA add constraint FK_CURSO_MATRICULA foreign key (ID_CURSO)
      references CURSO (ID_CURSO) on delete restrict on update restrict;

alter table MATRICULA add constraint FK_ESTUDIANTE_MATRICULA foreign key (ID_ESTUDIANTE)
      references ESTUDIANTE (ID_ESTUDIANTE) on delete restrict on update restrict;

alter table NOTA add constraint FK_ESTUDIANTE_NOTA foreign key (ID_ESTUDIANTE)
      references ESTUDIANTE (ID_ESTUDIANTE) on delete restrict on update restrict;

alter table NOTA add constraint FK_MATERIA_NOTA foreign key (ID_MATERIA)
      references MATERIA (ID_MATERIA) on delete restrict on update restrict;

alter table NOTAB add constraint FK_ESTUDIANTE_NOTAB foreign key (ID_ESTUDIANTE)
      references ESTUDIANTE (ID_ESTUDIANTE) on delete restrict on update restrict;

alter table NOTAB add constraint FK_MATERIA_NOTAB foreign key (ID_MATERIA)
      references MATERIA (ID_MATERIA) on delete restrict on update restrict;

alter table NOTAC add constraint FK_RELATIONSHIP_11 foreign key (ID_MATERIA)
      references MATERIA (ID_MATERIA) on delete restrict on update restrict;

alter table NOTAC add constraint FK_RELATIONSHIP_12 foreign key (ID_ESTUDIANTE)
      references ESTUDIANTE (ID_ESTUDIANTE) on delete restrict on update restrict;

