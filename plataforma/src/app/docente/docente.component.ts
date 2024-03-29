import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { MateriaService } from '../services/materia.services';
import { MatriculaService } from '../services/matricula.services';
import { AdministradorService } from '../services/administrador.services';
import { DocenteService } from '../services/docente.services';
import { NotaService } from '../services/nota.services';
import { InsumoService } from '../services/insumo.services';
import { Nota } from '../models/nota';
import { NotaC } from '../models/notaC';
import { NotaBasica } from '../models/notaBasica';
import { Calculable } from '../models/calculable';
import { CalculableC } from '../models/calculableC'
import { Insumo } from '../models/insumos';
import { InsumoBasica } from '../models/insumoB';
import { InsumoC } from '../models/insumoC';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';
import * as html2canvas from 'html2canvas';
import { isNumber } from 'util';
import { ExcelService } from '../services/excel.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit, DoCheck, OnDestroy {


  constructor(private _materiaService: MateriaService,
    private excelService: ExcelService,
    private _administradorService: AdministradorService,
    private _matriculaServices: MatriculaService,
    private _notaService: NotaService, private _docenteService: DocenteService,
    private _insumoService: InsumoService) { }

  public Titulo1;
  public Titulo2;
  public guardarMateriaMatricula;
  // banderas bloquer input

  public banderInsumo1 = false;
  public banderInsumo2 = false;
  public banderInsumo3 = false;
  public banderInsumo4 = false;
  public banderInsumo5 = false;
  public banderInsumo6 = false;
  public banderInsumo7 = false;
  public banderInsumo8 = false;

  // fin bloquear botones

  // aparecer  tabla 

  public banderTabla1 = false;
  public banderTabla2 = false;
  public banderTabla3 = false;

  // botones
  public btnFinalizar = true;
  public banderAux = false;
  public btnFinalizar2 = true;
  public btnFinalizar3 = true;
  public banderaHabilitar = false;
  public banderaHabilitarB = false;
  public banderaHabilitarC = false;
  public mensajeerrormodal;
  public loading;
  public periodoLectivoActual;
  public listadoEstudianteMatriculas;
  public listadoEstudianteNotas;


  public vectorListadoMisMaterias;
  public obj: Nota;
  public objC: Calculable;

  public objB: NotaBasica;
  public objCB: Calculable;

  public objNC: NotaC;
  public objNCC: CalculableC;

  public descripcionInsumo: Insumo;
  public descripcionInsumoB: InsumoBasica;
  public descripcionInsumoC: InsumoC;


  public mensajecorrectomodals;
  public mensajeerrormodals;

  // vectores
  public object = [];
  public objectCalculable = [];
  public objectB = [];
  public objectCalculableB = []
  public objectC = [];
  public objectCalculableC = []

  public recivir;
  public caso;

  public banderInsumo = false;
  public banderInsumoB = false;
  public banderInsumoC = false;

  public listadoInsumos;
  public listadoInsumosB;
  public listadoInsumosC
  public identity;

  public counter = 5;
  public banderSubirNotas = true;
  public btnHabilitarExportacion = true;

  // subscribes variables
  public subscribe1;
  public subscribe2;
  public subscribe3;
  public subscribe4;
  public subscribe5;
  public subscribe6;
  public subscribe7;
  public subscribe8;
  public subscribe9;
  public subscribe10;
  public subscribe11;
  public subscribe12;
  public subscribe13;


  ngOnInit() {

    this.getListadoMisMaterias();
    this.getPeriodoActual();
    this.identity = this._docenteService.getIdentity()
    this.getSubirNotas();
  }

  ngDoCheck() {

    this.recivir;
  }
  ngOnDestroy() {
    console.log("chao");
    this.subscribe1.unsubscribe();
    this.subscribe2.unsubscribe();
    this.subscribe3.unsubscribe();
    this.subscribe4.unsubscribe();
    this.subscribe5.unsubscribe();
    this.subscribe6.unsubscribe();
    this.subscribe7.unsubscribe();
    this.subscribe8.unsubscribe();
    this.subscribe9.unsubscribe();
    this.subscribe10.unsubscribe();
    this.subscribe11.unsubscribe();
    this.subscribe12.unsubscribe();
    this.subscribe13.unsubscribe();
    delete this.descripcionInsumoB;
    delete this.descripcionInsumo;
    delete this.object;
    delete this.obj;
    delete this.objectCalculable;
    delete this.objC;
    delete this.objectB;
    delete this.objB;
    delete this.objectCalculableB;
    delete this.objectC;
    delete this.objNC;
    delete this.objNCC;
    delete this.objectCalculableC;




  }

  cerrarDescInsumos() {

    this.banderInsumo = false;
  }

  cerrarDescInsumosB() {

    this.banderInsumoB = false;
  }

  cerrarDescInsumosC() {

    this.banderInsumoC = false;
  }



  DescripcionInsumosB() {
    this.descripcionInsumoB = new InsumoBasica("", "", "", "", "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");

    this.descripcionInsumoB.materia = this.guardarMateriaMatricula;
    this.descripcionInsumoB.periodo = this.periodoLectivoActual;


    var objDescInsumosB =
    {
      materia: this.guardarMateriaMatricula,
      periodo: this.periodoLectivoActual
    }

    this.subscribe1 = this._insumoService.getDescInsumosB(objDescInsumosB).subscribe(response => {

      if (response.insumosB != undefined) {
        this.listadoInsumosB = response.insumosB;
        console.log("listado insumos de la basica", this.listadoInsumosB);

        this.descripcionInsumoB.DescQ1P1insumo1 = this.listadoInsumosB.DescQ1P1insumo1;
        this.descripcionInsumoB.DescQ1P1insumo2 = this.listadoInsumosB.DescQ1P1insumo2;
        this.descripcionInsumoB.DescQ1P1insumo3 = this.listadoInsumosB.DescQ1P1insumo3;
        this.descripcionInsumoB.DescQ1P1insumo4 = this.listadoInsumosB.DescQ1P1insumo4;
        this.descripcionInsumoB.DescQ1P1insumo5 = this.listadoInsumosB.DescQ1P1insumo5;
        this.descripcionInsumoB.DescQ1P1insumo6 = this.listadoInsumosB.DescQ1P1insumo6;

        this.descripcionInsumoB.DescQ1P2insumo1 = this.listadoInsumosB.DescQ1P2insumo1;
        this.descripcionInsumoB.DescQ1P2insumo2 = this.listadoInsumosB.DescQ1P2insumo2;
        this.descripcionInsumoB.DescQ1P2insumo3 = this.listadoInsumosB.DescQ1P2insumo3;
        this.descripcionInsumoB.DescQ1P2insumo4 = this.listadoInsumosB.DescQ1P2insumo4;
        this.descripcionInsumoB.DescQ1P2insumo5 = this.listadoInsumosB.DescQ1P2insumo5;
        this.descripcionInsumoB.DescQ1P2insumo6 = this.listadoInsumosB.DescQ1P2insumo6;

        this.descripcionInsumoB.DescQ1P3insumo1 = this.listadoInsumosB.DescQ1P3insumo1;
        this.descripcionInsumoB.DescQ1P3insumo2 = this.listadoInsumosB.DescQ1P3insumo2;
        this.descripcionInsumoB.DescQ1P3insumo3 = this.listadoInsumosB.DescQ1P3insumo3;
        this.descripcionInsumoB.DescQ1P3insumo4 = this.listadoInsumosB.DescQ1P3insumo4;
        this.descripcionInsumoB.DescQ1P3insumo5 = this.listadoInsumosB.DescQ1P3insumo5;
        this.descripcionInsumoB.DescQ1P3insumo6 = this.listadoInsumosB.DescQ1P3insumo6;

        this.descripcionInsumoB.DescQ2P1insumo1 = this.listadoInsumosB.DescQ2P1insumo1;
        this.descripcionInsumoB.DescQ2P1insumo2 = this.listadoInsumosB.DescQ2P1insumo2;
        this.descripcionInsumoB.DescQ2P1insumo3 = this.listadoInsumosB.DescQ2P1insumo3;
        this.descripcionInsumoB.DescQ2P1insumo4 = this.listadoInsumosB.DescQ2P1insumo4;
        this.descripcionInsumoB.DescQ2P1insumo5 = this.listadoInsumosB.DescQ2P1insumo5;
        this.descripcionInsumoB.DescQ2P1insumo6 = this.listadoInsumosB.DescQ2P1insumo6;

        this.descripcionInsumoB.DescQ2P2insumo1 = this.listadoInsumosB.DescQ2P2insumo1;
        this.descripcionInsumoB.DescQ2P2insumo2 = this.listadoInsumosB.DescQ2P2insumo2;
        this.descripcionInsumoB.DescQ2P2insumo3 = this.listadoInsumosB.DescQ2P2insumo3;
        this.descripcionInsumoB.DescQ2P2insumo4 = this.listadoInsumosB.DescQ2P2insumo4;
        this.descripcionInsumoB.DescQ2P2insumo5 = this.listadoInsumosB.DescQ2P2insumo5;
        this.descripcionInsumoB.DescQ2P2insumo6 = this.listadoInsumosB.DescQ2P2insumo6;

        this.descripcionInsumoB.DescQ2P3insumo1 = this.listadoInsumosB.DescQ2P3insumo1;
        this.descripcionInsumoB.DescQ2P3insumo2 = this.listadoInsumosB.DescQ2P3insumo2;
        this.descripcionInsumoB.DescQ2P3insumo3 = this.listadoInsumosB.DescQ2P3insumo3;
        this.descripcionInsumoB.DescQ2P3insumo4 = this.listadoInsumosB.DescQ2P3insumo4;
        this.descripcionInsumoB.DescQ2P3insumo5 = this.listadoInsumosB.DescQ2P3insumo5;
        this.descripcionInsumoB.DescQ2P3insumo6 = this.listadoInsumosB.DescQ2P3insumo6;


      }
    }, (err) => { console.log("Existen Complicaciones Intente mas tarde", err) }
    );

  }


  actualizacionInsumosB(insumo) {

    this.caso = insumo;
    this.banderInsumoB = true;


    var objDescInsumosB =
    {
      materia: this.guardarMateriaMatricula,
      periodo: this.periodoLectivoActual
    }

    this.subscribe2 = this._insumoService.getDescInsumosB(objDescInsumosB).subscribe(response => {

      if (response.insumosB != undefined) {
        this.listadoInsumosB = response.insumosB;
        console.log("listado insumos de la basica", this.listadoInsumosB);
        switch (insumo) {

          case "q1p1i1": this.recivir = this.listadoInsumosB.DESCQ1P1INSUMO1; break;
          case "q1p1i2": this.recivir = this.listadoInsumosB.DESCQ1P1INSUMO2; break;
          case "q1p1i3": this.recivir = this.listadoInsumosB.DESCQ1P1INSUMO3; break;
          case "q1p1i4": this.recivir = this.listadoInsumosB.DESCQ1P1INSUMO4; break;
          case "q1p1i5": this.recivir = this.listadoInsumosB.DESCQ1P1INSUMO5; break;
          case "q1p1i6": this.recivir = this.listadoInsumosB.DESCQ1P1INSUMO6; break;

          case "q1p2i1": this.recivir = this.listadoInsumosB.DESCQ1P2INSUMO1; break;
          case "q1p2i2": this.recivir = this.listadoInsumosB.DESCQ1P2INSUMO2; break;
          case "q1p2i3": this.recivir = this.listadoInsumosB.DESCQ1P2INSUMO3; break;
          case "q1p2i4": this.recivir = this.listadoInsumosB.DESCQ1P2INSUMO4; break;
          case "q1p2i5": this.recivir = this.listadoInsumosB.DESCQ1P2INSUMO5; break;
          case "q1p2i6": this.recivir = this.listadoInsumosB.DESCQ1P2INSUMO6; break;

          case "q1p3i1": this.recivir = this.listadoInsumosB.DESCQ1P3INSUMO1; break;
          case "q1p3i2": this.recivir = this.listadoInsumosB.DESCQ1P3INSUMO2; break;
          case "q1p3i3": this.recivir = this.listadoInsumosB.DESCQ1P3INSUMO3; break;
          case "q1p3i4": this.recivir = this.listadoInsumosB.DESCQ1P3INSUMO4; break;
          case "q1p3i5": this.recivir = this.listadoInsumosB.DESCQ1P3INSUMO5; break;
          case "q1p3i6": this.recivir = this.listadoInsumosB.DESCQ1P3INSUMO6; break;

          case "q2p1i1": this.recivir = this.listadoInsumosB.DESCQ2P1INSUMO1; break;
          case "q2p1i2": this.recivir = this.listadoInsumosB.DESCQ2P1INSUMO2; break;
          case "q2p1i3": this.recivir = this.listadoInsumosB.DESCQ2P1INSUMO3; break;
          case "q2p1i4": this.recivir = this.listadoInsumosB.DESCQ2P1INSUMO4; break;
          case "q2p1i5": this.recivir = this.listadoInsumosB.DESCQ2P1INSUMO5; break;
          case "q2p1i6": this.recivir = this.listadoInsumosB.DESCQ2P1INSUMO6; break;

          case "q2p2i1": this.recivir = this.listadoInsumosB.DESCQ2P2INSUMO1; break;
          case "q2p2i2": this.recivir = this.listadoInsumosB.DESCQ2P2INSUMO2; break;
          case "q2p2i3": this.recivir = this.listadoInsumosB.DESCQ2P2INSUMO3; break;
          case "q2p2i4": this.recivir = this.listadoInsumosB.DESCQ2P2INSUMO4; break;
          case "q2p2i5": this.recivir = this.listadoInsumosB.DESCQ2P2INSUMO5; break;
          case "q2p2i6": this.recivir = this.listadoInsumosB.DESCQ2P2INSUMO6; break;


          case "q2p3i1": this.recivir = this.listadoInsumosB.DESCQ2P3INSUMO1; break;
          case "q2p3i2": this.recivir = this.listadoInsumosB.DESCQ2P3INSUMO2; break;
          case "q2p3i3": this.recivir = this.listadoInsumosB.DESCQ2P3INSUMO3; break;
          case "q2p3i4": this.recivir = this.listadoInsumosB.DESCQ2P3INSUMO4; break;
          case "q2p3i5": this.recivir = this.listadoInsumosB.DESCQ2P3INSUMO5; break;
          case "q2p3i6": this.recivir = this.listadoInsumosB.DESCQ2P3INSUMO6; break;

        }

      }
    }, (err) => { console.log("Existen Complicaciones Intente mas tarde", err) }
    );


  }


  saveDescripcionInsumosB() {

    switch (this.caso) {
      case "q1p1i1":
        this.descripcionInsumoB.DescQ1P1insumo1 = this.recivir;
        break;

      case "q1p1i2":
        this.descripcionInsumoB.DescQ1P1insumo2 = this.recivir;
        break;

      case "q1p1i3":
        this.descripcionInsumoB.DescQ1P1insumo3 = this.recivir;
        break;

      case "q1p1i4":
        this.descripcionInsumoB.DescQ1P1insumo4 = this.recivir;
        break;

      case "q1p1i5":
        this.descripcionInsumoB.DescQ1P1insumo5 = this.recivir;
        break;

      case "q1p1i6":
        this.descripcionInsumoB.DescQ1P1insumo6 = this.recivir;
        break;


      case "q1p2i1":
        this.descripcionInsumoB.DescQ1P2insumo1 = this.recivir;
        break;

      case "q1p2i2":
        this.descripcionInsumoB.DescQ1P2insumo2 = this.recivir;
        break;

      case "q1p2i3":
        this.descripcionInsumoB.DescQ1P2insumo3 = this.recivir;
        break;

      case "q1p2i4":
        this.descripcionInsumoB.DescQ1P2insumo4 = this.recivir;
        break;

      case "q1p2i5":
        this.descripcionInsumoB.DescQ1P2insumo5 = this.recivir;
        break;

      case "q1p3i1":
        this.descripcionInsumoB.DescQ1P3insumo1 = this.recivir;
        break;

      case "q1p3i2":
        this.descripcionInsumoB.DescQ1P3insumo2 = this.recivir;
        break;

      case "q1p3i3":
        this.descripcionInsumoB.DescQ1P3insumo3 = this.recivir;
        break;

      case "q1p3i4":
        this.descripcionInsumoB.DescQ1P3insumo4 = this.recivir;
        break;

      case "q1p3i5":
        this.descripcionInsumoB.DescQ1P3insumo5 = this.recivir;
        break;

      case "q1p3i6":
        this.descripcionInsumoB.DescQ1P3insumo6 = this.recivir;
        break;


      case "q2p1i1":
        this.descripcionInsumoB.DescQ2P1insumo1 = this.recivir;
        break;

      case "q2p1i2":
        this.descripcionInsumoB.DescQ2P1insumo2 = this.recivir;
        break;

      case "q2p1i3":
        this.descripcionInsumoB.DescQ2P1insumo3 = this.recivir;
        break;

      case "q2p1i4":
        this.descripcionInsumoB.DescQ2P1insumo4 = this.recivir;
        break;

      case "q2p1i5":
        this.descripcionInsumoB.DescQ2P1insumo5 = this.recivir;
        break;

      case "q2p1i6":
        this.descripcionInsumoB.DescQ2P1insumo6 = this.recivir;
        break;

      case "q2p2i1":
        this.descripcionInsumoB.DescQ2P2insumo1 = this.recivir;
        break;

      case "q2p2i2":
        this.descripcionInsumoB.DescQ2P2insumo2 = this.recivir;
        break;

      case "q2p2i3":
        this.descripcionInsumoB.DescQ2P2insumo3 = this.recivir;
        break;

      case "q2p2i4":
        this.descripcionInsumoB.DescQ2P2insumo4 = this.recivir;
        break;

      case "q2p2i5":
        this.descripcionInsumoB.DescQ2P2insumo5 = this.recivir;
        break;

      case "q2p2i6":
        this.descripcionInsumoB.DescQ2P2insumo6 = this.recivir;
        break;

      case "q2p3i1":
        this.descripcionInsumoB.DescQ2P3insumo1 = this.recivir;
        break;

      case "q2p3i2":
        this.descripcionInsumoB.DescQ2P3insumo2 = this.recivir;
        break;

      case "q2p3i3":
        this.descripcionInsumoB.DescQ2P3insumo3 = this.recivir;
        break;

      case "q2p3i4":
        this.descripcionInsumoB.DescQ2P3insumo4 = this.recivir;
        break;

      case "q2p3i5":
        this.descripcionInsumoB.DescQ2P3insumo5 = this.recivir;
        break;

      case "q2p3i6":
        this.descripcionInsumoB.DescQ2P3insumo6 = this.recivir;
        break;
    }

    this.subscribe3 = this._insumoService.registerInsumoB(this.descripcionInsumoB).subscribe(
      response => {
        this.mensajecorrectomodals = response.message;
        console.log("satisfactoriamente");
        this.loading = false;
        document.getElementById("openModalCorrecto").click();
        this.btnFinalizar2 = true;
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage) {
          this.mensajeerrormodals = JSON.parse(errorMessage._body).message;
          document.getElementById("openModalError").click();
          try {
            var body = JSON.parse(error._body);
            errorMessage = body.message;
          } catch {
            errorMessage = "No hay conexión intentelo más tarde";
            this.loading = false;
            document.getElementById("openModalError").click();
          }
          this.loading = false;
        }
      }
    );

  }


  DescripcionInsumos() {
    this.descripcionInsumo = new Insumo("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");

    this.descripcionInsumo.materia = this.guardarMateriaMatricula;
    this.descripcionInsumo.periodo = this.periodoLectivoActual;
    /*this.descripcionInsumo.Descinsumo1 = "Insumo 1";
    this.descripcionInsumo.Descinsumo2 = "Insumo 2";
    this.descripcionInsumo.Descinsumo3 = "Insumo 3";
    this.descripcionInsumo.Descinsumo4 = "Insumo 4";
    this.descripcionInsumo.Descinsumo5 = "Insumo 5";
    this.descripcionInsumo.Descinsumo6 = "Insumo 6";
    this.descripcionInsumo.Descinsumo7 = "Insumo 7";
    this.descripcionInsumo.Descinsumo8 = "Insumo 8";
    this.descripcionInsumo.Descinsumo11 = "Insumo 1";
    this.descripcionInsumo.Descinsumo22 = "Insumo 2";
    this.descripcionInsumo.Descinsumo33 = "Insumo 3";
    this.descripcionInsumo.Descinsumo44 = "Insumo 4";
    this.descripcionInsumo.Descinsumo55 = "Insumo 5";
    this.descripcionInsumo.Descinsumo66 = "Insumo 6";
    this.descripcionInsumo.Descinsumo77 = "Insumo 7";
    this.descripcionInsumo.Descinsumo88 = "Insumo 8";*/
    var objDescInsumos =
    {
      materia: this.guardarMateriaMatricula,
      periodo: this.periodoLectivoActual
    }

    this.subscribe4 = this._insumoService.getDescInsumos(objDescInsumos).subscribe(response => {

      if (response.insumos != undefined) {
        this.listadoInsumos = response.insumos;

        console.log("listado de insumos", this.listadoInsumos);


        this.descripcionInsumo.Descinsumo1 = this.listadoInsumos.Descinsumo1;
        this.descripcionInsumo.Descinsumo2 = this.listadoInsumos.Descinsumo2;
        this.descripcionInsumo.Descinsumo3 = this.listadoInsumos.Descinsumo3;
        this.descripcionInsumo.Descinsumo4 = this.listadoInsumos.Descinsumo4;
        this.descripcionInsumo.Descinsumo5 = this.listadoInsumos.Descinsumo5;
        this.descripcionInsumo.Descinsumo6 = this.listadoInsumos.Descinsumo6;
        this.descripcionInsumo.Descinsumo7 = this.listadoInsumos.Descinsumo7;
        this.descripcionInsumo.Descinsumo8 = this.listadoInsumos.Descinsumo8;

        this.descripcionInsumo.Descinsumo11 = this.listadoInsumos.Descinsumo11;
        this.descripcionInsumo.Descinsumo22 = this.listadoInsumos.Descinsumo22;
        this.descripcionInsumo.Descinsumo33 = this.listadoInsumos.Descinsumo33;
        this.descripcionInsumo.Descinsumo44 = this.listadoInsumos.Descinsumo44;
        this.descripcionInsumo.Descinsumo55 = this.listadoInsumos.Descinsumo55;
        this.descripcionInsumo.Descinsumo66 = this.listadoInsumos.Descinsumo66;
        this.descripcionInsumo.Descinsumo77 = this.listadoInsumos.Descinsumo77;
        this.descripcionInsumo.Descinsumo88 = this.listadoInsumos.Descinsumo88;

      }


    }, (err) => { console.log("Existen Complicaciones Intente mas tarde", err) }
    );




  }


  actualizacionInsumos(insumo) {

    this.caso = insumo;
    this.banderInsumo = true;
    this.recivir = "";

    var objDescInsumos =
    {
      materia: this.guardarMateriaMatricula,
      periodo: this.periodoLectivoActual
    }

    this.subscribe5 = this._insumoService.getDescInsumos(objDescInsumos).subscribe(response => {

      if (response.insumos != undefined) {
        this.listadoInsumos = response.insumos;

        console.log("listado de insumos", this.listadoInsumos);
        switch (insumo) {

          case 1: this.recivir = this.listadoInsumos.DESCINSUMO1; break;
          case 2: this.recivir = this.listadoInsumos.DESCINSUMO2; break;
          case 3: this.recivir = this.listadoInsumos.DESCINSUMO3; break;
          case 4: this.recivir = this.listadoInsumos.DESCINSUMO4; break;
          case 5: this.recivir = this.listadoInsumos.DESCINSUMO5; break;
          case 6: this.recivir = this.listadoInsumos.DESCINSUMO6; break;
          case 7: this.recivir = this.listadoInsumos.DESCINSUMO7; break;
          case 8: this.recivir = this.listadoInsumos.DESCINSUMO8; break;

          case 11: this.recivir = this.listadoInsumos.DESCINSUMO11; break;
          case 22: this.recivir = this.listadoInsumos.DESCINSUMO22; break;
          case 33: this.recivir = this.listadoInsumos.DESCINSUMO33; break;
          case 44: this.recivir = this.listadoInsumos.DESCINSUMO44; break;
          case 55: this.recivir = this.listadoInsumos.DESCINSUMO55; break;
          case 66: this.recivir = this.listadoInsumos.DESCINSUMO66; break;
          case 77: this.recivir = this.listadoInsumos.DESCINSUMO77; break;
          case 88: this.recivir = this.listadoInsumos.DESCINSUMO88; break;

        }

      }
    }, (err) => { console.log("Existen Complicaciones Intente mas tarde", err) }
    );





  }


  saveDescripcionInsumos() {

    switch (this.caso) {
      case 1:
        this.descripcionInsumo.Descinsumo1 = this.recivir;
        break;

      case 2:
        this.descripcionInsumo.Descinsumo2 = this.recivir;
        break;
      case 3:
        this.descripcionInsumo.Descinsumo3 = this.recivir;
        break;
      case 4:
        this.descripcionInsumo.Descinsumo4 = this.recivir;
        break;
      case 5:
        this.descripcionInsumo.Descinsumo5 = this.recivir;
        break;
      case 6:
        this.descripcionInsumo.Descinsumo6 = this.recivir;
        break;
      case 7:
        this.descripcionInsumo.Descinsumo7 = this.recivir;
        break;
      case 8:
        this.descripcionInsumo.Descinsumo8 = this.recivir;
        break;
      case 11:
        this.descripcionInsumo.Descinsumo11 = this.recivir;
        break;
      case 22:
        this.descripcionInsumo.Descinsumo22 = this.recivir;
        break;
      case 33:
        this.descripcionInsumo.Descinsumo33 = this.recivir;
        break;
      case 44:
        this.descripcionInsumo.Descinsumo44 = this.recivir;
        break;
      case 55:
        this.descripcionInsumo.Descinsumo55 = this.recivir;
        break;
      case 66:
        this.descripcionInsumo.Descinsumo66 = this.recivir;
        break;
      case 77:
        this.descripcionInsumo.Descinsumo77 = this.recivir;
        break;

      case 88:
        this.descripcionInsumo.Descinsumo88 = this.recivir;
        break;
    }

    this.subscribe5 = this._insumoService.registerInsumo(this.descripcionInsumo).subscribe(
      response => {
        this.mensajecorrectomodals = response.message;
        console.log("satisfactoriamente");
        this.loading = false;
        document.getElementById("openModalCorrecto").click();
        this.btnFinalizar2 = true;
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage) {
          this.mensajeerrormodals = JSON.parse(errorMessage._body).message;
          document.getElementById("openModalError").click();
          try {
            var body = JSON.parse(error._body);
            errorMessage = body.message;
          } catch {
            errorMessage = "No hay conexión intentelo más tarde";
            this.loading = false;
            document.getElementById("openModalError").click();
          }
          this.loading = false;
        }
      }
    );

  }







  DescripcionInsumosC() {
    this.descripcionInsumoC = new InsumoC("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");

    this.descripcionInsumoC.materia = this.guardarMateriaMatricula;
    this.descripcionInsumoC.periodo = this.periodoLectivoActual;


    var objDescInsumosC =
    {
      materia: this.guardarMateriaMatricula,
      periodo: this.periodoLectivoActual
    }

    this.subscribe1 = this._insumoService.getDescInsumosC(objDescInsumosC).subscribe(response => {

      if (response.insumosC != undefined) {
        this.listadoInsumosC = response.insumosC;
        console.log("listado insumos de la basica", this.listadoInsumosC);

        this.descripcionInsumoC.Descpuforo = this.listadoInsumosC.Descpuforo;
        this.descripcionInsumoC.Descput1 = this.listadoInsumosC.Descput1;
        this.descripcionInsumoC.Descput2 = this.listadoInsumosC.Descput2;
        this.descripcionInsumoC.Descput3 = this.listadoInsumosC.Descput3;
        this.descripcionInsumoC.Descput4 = this.listadoInsumosC.Descput4;

        this.descripcionInsumoC.Descsuforo = this.listadoInsumosC.Descsuforo;
        this.descripcionInsumoC.Descsut1 = this.listadoInsumosC.Descsut1;
        this.descripcionInsumoC.Descsut2 = this.listadoInsumosC.Descsut2;
        this.descripcionInsumoC.Descsut3 = this.listadoInsumosC.Descsut3;
        this.descripcionInsumoC.Descsut4 = this.listadoInsumosC.Descsut4;

        this.descripcionInsumoC.Desctuforo = this.listadoInsumosC.Desctuforo;
        this.descripcionInsumoC.Desctut1 = this.listadoInsumosC.Desctut1;
        this.descripcionInsumoC.Desctut2 = this.listadoInsumosC.Desctut2;
        this.descripcionInsumoC.Desctut3 = this.listadoInsumosC.Desctut3;
        this.descripcionInsumoC.Desctut4 = this.listadoInsumosC.Desctut4;


        this.descripcionInsumoC.Desccuforo = this.listadoInsumosC.Desccuforo;
        this.descripcionInsumoC.Desccut1 = this.listadoInsumosC.Desccut1;
        this.descripcionInsumoC.Desccut2 = this.listadoInsumosC.Desccut2;
        this.descripcionInsumoC.Desccut3 = this.listadoInsumosC.Desccut3;
        this.descripcionInsumoC.Desccut4 = this.listadoInsumosC.Desccut4;

      }
    }, (err) => { console.log("Existen Complicaciones Intente mas tarde", err) }
    );

  }


  actualizacionInsumosC(insumo) {
    // this.recivir ="";
    this.caso = insumo;
    this.banderInsumoC = true;


    var objDescInsumosC =
    {
      materia: this.guardarMateriaMatricula,
      periodo: this.periodoLectivoActual
    }

    this.subscribe2 = this._insumoService.getDescInsumosC(objDescInsumosC).subscribe(response => {

      if (response.insumosC != undefined) {
        this.listadoInsumosC = response.insumosC;
        console.log("listado insumos de la tabla c", this.listadoInsumosB);
        switch (insumo) {

          case "puf": this.recivir = this.listadoInsumosC.DESCPUFORO; break;
          case "put1": this.recivir = this.listadoInsumosC.DESCPUTAREA1; break;
          case "put2": this.recivir = this.listadoInsumosC.DESCPUTAREA2; break;
          case "put3": this.recivir = this.listadoInsumosC.DESCPUTAREA3; break;
          case "put4": this.recivir = this.listadoInsumosC.DESCPUTAREA4; break;



          case "suf": this.recivir = this.listadoInsumosC.DESCSUFORO; break;
          case "sut1": this.recivir = this.listadoInsumosC.DESCSUTAREA1; break;
          case "sut2": this.recivir = this.listadoInsumosC.DESCSUTAREA2; break;
          case "sut3": this.recivir = this.listadoInsumosC.DESCSUTAREA3; break;
          case "sut4": this.recivir = this.listadoInsumosC.DESCSUTAREA4; break;


          case "tuf": this.recivir = this.listadoInsumosC.DESCTUFORO; break;
          case "tut1": this.recivir = this.listadoInsumosC.DESCTUTAREA1; break;
          case "tut2": this.recivir = this.listadoInsumosC.DESCTUTAREA2; break;
          case "tut3": this.recivir = this.listadoInsumosC.DESCTUTAREA3; break;
          case "tut4": this.recivir = this.listadoInsumosC.DESCTUTAREA4; break;


          case "cuf": this.recivir = this.listadoInsumosC.DESCCUFORO; break;
          case "cut1": this.recivir = this.listadoInsumosC.DESCCUTAREA1; break;
          case "cut2": this.recivir = this.listadoInsumosC.DESCCUTAREA2; break;
          case "cut3": this.recivir = this.listadoInsumosC.DESCCUTAREA3; break;
          case "cut4": this.recivir = this.listadoInsumosC.DESCCUTAREA4; break;

          case "quf": this.recivir = this.listadoInsumosC.DESCQUFORO; break;
          case "qut1": this.recivir = this.listadoInsumosC.DESCQUTAREA1; break;
          case "qut2": this.recivir = this.listadoInsumosC.DESCQUTAREA2; break;
          case "qut3": this.recivir = this.listadoInsumosC.DESCQUTAREA3; break;
          case "qut4": this.recivir = this.listadoInsumosC.DESCQUTAREA4; break;

        }

      }
    }, (err) => { console.log("Existen Complicaciones Intente mas tarde", err) }
    );


  }


  saveDescripcionInsumosC() {

    switch (this.caso) {
      case "puf":
        this.descripcionInsumoC.Descpuforo = this.recivir;
        break;

      case "put1":
        this.descripcionInsumoC.Descput1 = this.recivir;
        break;

      case "put2":
        this.descripcionInsumoC.Descput2 = this.recivir;
        break;

      case "put3":
        this.descripcionInsumoC.Descput3 = this.recivir;
        break;

      case "put4":
        this.descripcionInsumoC.Descput4 = this.recivir;
        break;



      case "suf":
        this.descripcionInsumoC.Descsuforo = this.recivir;
        break;


      case "sut1":
        this.descripcionInsumoC.Descsut1 = this.recivir;
        break;

      case "sut2":
        this.descripcionInsumoC.Descsut2 = this.recivir;
        break;

      case "sut3":
        this.descripcionInsumoC.Descsut3 = this.recivir;
        break;

      case "sut4":
        this.descripcionInsumoC.Descsut4 = this.recivir;
        break;




      case "tuf":
        this.descripcionInsumoC.Desctuforo = this.recivir;
        break;

      case "tut1":
        this.descripcionInsumoC.Desctut1 = this.recivir;
        break;

      case "tut2":
        this.descripcionInsumoC.Desctut2 = this.recivir;
        break;

      case "tut3":
        this.descripcionInsumoC.Desctut3 = this.recivir;
        break;

      case "tut4":
        this.descripcionInsumoC.Desctut4 = this.recivir;
        break;





      case "cuf":
        this.descripcionInsumoC.Desccuforo = this.recivir;
        break;

      case "cut1":
        this.descripcionInsumoC.Desccut1 = this.recivir;
        break;


      case "cut2":
        this.descripcionInsumoC.Desccut2 = this.recivir;
        break;

      case "cut3":
        this.descripcionInsumoC.Desccut3 = this.recivir;
        break;

      case "cut4":
        this.descripcionInsumoC.Desccut4 = this.recivir;
        break;


    }

    this.subscribe3 = this._insumoService.registerInsumoC(this.descripcionInsumoC).subscribe(
      response => {
        this.mensajecorrectomodals = response.message;
        console.log("satisfactoriamente");
        this.loading = false;
        document.getElementById("openModalCorrecto").click();
        this.btnFinalizar3 = true;
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage) {
          this.mensajeerrormodals = JSON.parse(errorMessage._body).message;
          document.getElementById("openModalError").click();
          try {
            var body = JSON.parse(error._body);
            errorMessage = body.message;
          } catch {
            errorMessage = "No hay conexión intentelo más tarde";
            this.loading = false;
            document.getElementById("openModalError").click();
          }
          this.loading = false;
        }
      }
    );

  }






  recivo() {
    console.log("lo hicimos", this.recivir);

  }

  pruebaclick() {

    this.banderaHabilitar = false;
    this.banderaHabilitarB = false;
    this.banderaHabilitarC = false;
    this.banderAux = false;
    for (let i = 0; i < Object.keys(this.listadoEstudianteMatriculas).length; i++) {
      document.getElementById("tdbuttonGuardar" + i).click();
      console.log(this.object);
    }
  }


  prueba(value, i) {
    console.log("antes de mandar la materia index  es", i)
    this.object[i].estudiante = value.ESTUDIANTE.ID_ESTUDIANTE;
    this.object[i].materia = this.guardarMateriaMatricula;
    this.object[i].periodo = this.periodoLectivoActual;
    this.object[i].pt = this.objectCalculable[i].promedioPeriodo;
    this.calculos(i);

  }


  pruebaB(value, i) {
    console.log("antes de mandar la materia index Basico es", this.guardarMateriaMatricula)
    this.objectB[i].estudiante = value.ESTUDIANTE.ID_ESTUDIANTE;
    this.objectB[i].materia = this.guardarMateriaMatricula;
    this.objectB[i].periodo = this.periodoLectivoActual;
    this.objectB[i].pt = this.objectCalculableB[i].promedioPeriodo;
    this.calculosB(i);
  }

  pruebaC(value, i) {
    console.log("antes de mandar la materia index Basico es", this.guardarMateriaMatricula)
    this.objectC[i].estudiante = value.ESTUDIANTE.ID_ESTUDIANTE;
    this.objectC[i].materia = this.guardarMateriaMatricula;
    this.objectC[i].periodo = this.periodoLectivoActual;
    this.objectC[i].pt = this.objectCalculableC[i].promedioFinal;
    this.calculosC(i);
  }




  calculosB(i) {


    if (this.objectB[i].Q1P1insumo1 > 10 || this.objectB[i].Q1P1insumo2 > 10 || this.objectB[i].Q1P1insumo3 > 10
      || this.objectB[i].Q1P1insumo4 > 10 || this.objectB[i].Q1P1insumo5 > 10 || this.objectB[i].Q1P1insumo6 > 10

      || this.objectB[i].Q1P2insumo1 > 10 || this.objectB[i].Q1P2insumo2 > 10 || this.objectB[i].Q1P2insumo3 > 10
      || this.objectB[i].Q1P2insumo4 > 10 || this.objectB[i].Q1P2insumo5 > 10 || this.objectB[i].Q1P2insumo6 > 10

      || this.objectB[i].Q1P3insumo1 > 10 || this.objectB[i].Q1P3insumo2 > 10 || this.objectB[i].Q1P3insumo3 > 10
      || this.objectB[i].Q1P3insumo4 > 10 || this.objectB[i].Q1P3insumo5 > 10 || this.objectB[i].Q1P3insumo6 > 10
      || this.objectB[i].examen1 > 10

      || this.objectB[i].Q2P1insumo1 > 10 || this.objectB[i].Q2P1insumo2 > 10 || this.objectB[i].Q2P1insumo3 > 10
      || this.objectB[i].Q2P1insumo4 > 10 || this.objectB[i].Q2P1insumo5 > 10 || this.objectB[i].Q2P1insumo6 > 10

      || this.objectB[i].Q2P2insumo1 > 10 || this.objectB[i].Q2P2insumo2 > 10 || this.objectB[i].Q2P2insumo3 > 10
      || this.objectB[i].Q2P2insumo4 > 10 || this.objectB[i].Q2P2insumo5 > 10 || this.objectB[i].Q2P2insumo6 > 10

      || this.objectB[i].Q2P3insumo1 > 10 || this.objectB[i].Q2P3insumo2 > 10 || this.objectB[i].Q2P3insumo3 > 10
      || this.objectB[i].Q2P3insumo4 > 10 || this.objectB[i].Q2P3insumo5 > 10 || this.objectB[i].Q2P3insumo6 > 10

      || this.objectB[i].examen2 > 10 || this.objectB[i].examenGracia > 10 || this.objectB[i].examenRemedial > 10 || this.objectB[i].examenSupletorio > 10) {
      this.btnFinalizar2 = true;
      this.banderAux = true;
      this.mensajeerrormodal = "Alguna de las notas es mayor a 10 reviselas nuevamente";

      document.getElementById("openModalError").click();

    } else {
      if (this.banderAux) { this.btnFinalizar2 = true; } else { this.btnFinalizar2 = false; }


      var ochentaporciento1 = ((parseFloat(this.objectB[i].Q1P1insumo1) + parseFloat(this.objectB[i].Q1P1insumo2)
        + parseFloat(this.objectB[i].Q1P1insumo3) + parseFloat(this.objectB[i].Q1P1insumo4) + parseFloat(this.objectB[i].Q1P1insumo5)
        + parseFloat(this.objectB[i].Q1P1insumo6) +

        parseFloat(this.objectB[i].Q1P2insumo1) + parseFloat(this.objectB[i].Q1P2insumo2) + parseFloat(this.objectB[i].Q1P2insumo3) +
        + parseFloat(this.objectB[i].Q1P2insumo4) + parseFloat(this.objectB[i].Q1P2insumo5) + parseFloat(this.objectB[i].Q1P2insumo6) +

        parseFloat(this.objectB[i].Q1P3insumo1) + parseFloat(this.objectB[i].Q1P3insumo2) + parseFloat(this.objectB[i].Q1P3insumo3) +
        parseFloat(this.objectB[i].Q1P3insumo4) + parseFloat(this.objectB[i].Q1P3insumo5) + parseFloat(this.objectB[i].Q1P3insumo6)) / 18) * 0.8;


      var veinteporciento1 = parseFloat(this.objectB[i].examen1) * 0.2;

      var promedio1 = ochentaporciento1 + veinteporciento1

      var ochentaporciento2 = ((parseFloat(this.objectB[i].Q2P1insumo1) + parseFloat(this.objectB[i].Q2P1insumo2)
        + parseFloat(this.objectB[i].Q2P1insumo3) + parseFloat(this.objectB[i].Q2P1insumo4) + parseFloat(this.objectB[i].Q2P1insumo5)
        + parseFloat(this.objectB[i].Q2P1insumo6) +

        parseFloat(this.objectB[i].Q2P2insumo1) + parseFloat(this.objectB[i].Q2P2insumo2) + parseFloat(this.objectB[i].Q2P2insumo3)
        + parseFloat(this.objectB[i].Q2P2insumo4) + parseFloat(this.objectB[i].Q2P2insumo5) + parseFloat(this.objectB[i].Q2P2insumo6) +

        parseFloat(this.objectB[i].Q2P3insumo1) + parseFloat(this.objectB[i].Q2P3insumo2) + parseFloat(this.objectB[i].Q2P3insumo3) +
        parseFloat(this.objectB[i].Q2P3insumo4) + parseFloat(this.objectB[i].Q2P3insumo5) + parseFloat(this.objectB[i].Q2P3insumo6)) / 18) * 0.8;


      var veinteporciento2 = parseFloat(this.objectB[i].examen2) * 0.2;
      var promedio2 = ochentaporciento2 + veinteporciento2
      var promedioPeriodo = (promedio1 + promedio2) / 2;


      this.objectCalculableB[i].ochentaporciento1 = ochentaporciento1.toFixed(2);

      this.objectCalculableB[i].veinteporciento1 = veinteporciento1.toFixed(2);
      this.objectCalculableB[i].promedio1 = promedio1.toFixed(2);
      this.objectCalculableB[i].ochentaporciento2 = ochentaporciento2.toFixed(2);
      console.log("miraaaaaaaaaaaaaaaaa", ochentaporciento2, "objeto ", this.objectB[i]);
      this.objectCalculableB[i].veinteporciento2 = veinteporciento2.toFixed(2);
      this.objectCalculableB[i].promedio2 = promedio2.toFixed(2);
      this.objectCalculableB[i].promedioPeriodo = promedioPeriodo.toFixed(2);

      // calculos de examennes complementarios
      if (this.objectB[i].examenSupletorio >= 7) {
        this.objectCalculableB[i].promedioPeriodo = 7;

      }


      if (this.objectB[i].examenRemedial >= 7) {
        this.objectCalculableB[i].promedioPeriodo = 7;

      }


      if (this.objectB[i].examenGracia >= 7) {
        this.objectCalculableB[i].promedioPeriodo = 7;

      }

    }
  }


  calculos(i) {


    if (this.object[i].insumo1 > 10 || this.object[i].insumo2 > 10 || this.object[i].insumo3 > 10 || this.object[i].insumo4 > 10
      || this.object[i].insumo5 > 10 || this.object[i].insumo6 > 10 || this.object[i].insumo7 > 10 || this.object[i].insumo8 > 10
      || this.object[i].examen1 > 10 || this.object[i].insumo11 > 10 || this.object[i].insumo22 > 10 || this.object[i].insumo33 > 10
      || this.object[i].insumo44 > 10 || this.object[i].insumo55 > 10 || this.object[i].insumo66 > 10 || this.object[i].insumo77 > 10
      || this.object[i].insumo88 > 10 || this.object[i].examen2 > 10 || this.object[i].examenGracia > 10
      || this.object[i].examenRemedial > 10 || this.object[i].examenSupletorio > 10) {
      this.btnFinalizar = true;
      this.banderAux = true;
      this.mensajeerrormodal = "Alguna de las notas es mayor a 10 reviselas nuevamente";

      document.getElementById("openModalError").click();

    } else {
      if (this.banderAux) { this.btnFinalizar = true; } else { this.btnFinalizar = false; }

      var ochentaporciento1 = ((parseFloat(this.object[i].insumo1) + parseFloat(this.object[i].insumo2)
        + parseFloat(this.object[i].insumo3) + parseFloat(this.object[i].insumo4) + parseFloat(this.object[i].insumo5)
        + parseFloat(this.object[i].insumo6) + parseFloat(this.object[i].insumo7) + parseFloat(this.object[i].insumo8)) / 8) * 0.8;


      var veinteporciento1 = parseFloat(this.object[i].examen1) * 0.2;

      var promedio1 = ochentaporciento1 + veinteporciento1

      var ochentaporciento2 = ((parseFloat(this.object[i].insumo11) + parseFloat(this.object[i].insumo22)
        + parseFloat(this.object[i].insumo33) + parseFloat(this.object[i].insumo44) + parseFloat(this.object[i].insumo55)
        + parseFloat(this.object[i].insumo66) + parseFloat(this.object[i].insumo77) + parseFloat(this.object[i].insumo88)) / 8) * 0.8;

      var veinteporciento2 = parseFloat(this.object[i].examen2) * 0.2;
      var promedio2 = ochentaporciento2 + veinteporciento2
      var promedioPeriodo = (promedio1 + promedio2) / 2;


      this.objectCalculable[i].ochentaporciento1 = ochentaporciento1.toFixed(2);
      this.objectCalculable[i].veinteporciento1 = veinteporciento1.toFixed(2);
      this.objectCalculable[i].promedio1 = promedio1.toFixed(2);
      this.objectCalculable[i].ochentaporciento2 = ochentaporciento2.toFixed(2);
      this.objectCalculable[i].veinteporciento2 = veinteporciento2.toFixed(2);
      this.objectCalculable[i].promedio2 = promedio2.toFixed(2);
      this.objectCalculable[i].promedioPeriodo = promedioPeriodo.toFixed(2);

      // calculo para examenes complementarios

      if (this.object[i].examenSupletorio >= 7) {
        this.objectCalculable[i].promedioPeriodo = 7;

      }


      if (this.object[i].examenRemedial >= 7) {
        this.objectCalculable[i].promedioPeriodo = 7;

      }


      if (this.object[i].examenGracia >= 7) {
        this.objectCalculable[i].promedioPeriodo = 7;

      }

    }
  }


  calculosC(i) {


    if (this.objectC[i].Puforo > 10 || this.objectC[i].Putarea1 > 10 || this.objectC[i].Putarea2 > 10
      || this.objectC[i].Putarea3 > 10 || this.objectC[i].Putarea4 > 10 || this.objectC[i].Puexamen > 10

      || this.objectC[i].Suforo > 10 || this.objectC[i].Sutarea1 > 10 || this.objectC[i].Sutarea2 > 10
      || this.objectC[i].Sutarea3 > 10 || this.objectC[i].Sutarea4 > 10 || this.objectC[i].Suexamen > 10

      || this.objectC[i].Tuforo > 10 || this.objectC[i].Tutarea1 > 10 || this.objectC[i].Tutarea2 > 10
      || this.objectC[i].Tutarea3 > 10 || this.objectC[i].Tutarea4 > 10 || this.objectC[i].Tuexamen > 10


      || this.objectC[i].Cuforo > 10 || this.objectC[i].Cutarea1 > 10 || this.objectC[i].Cutarea2 > 10
      || this.objectC[i].Cutarea3 > 10 || this.objectC[i].Cutarea4 > 10 || this.objectC[i].Cuexamen > 10

      || this.objectC[i].Quforo > 10 || this.objectC[i].Qutarea1 > 10 || this.objectC[i].Qutarea2 > 10
      || this.objectC[i].Qutarea3 > 10 || this.objectC[i].Qutarea4 > 10 || this.objectC[i].Quexamen > 10

      || this.objectC[i].examenFinal > 10 || this.objectC[i].examenGracia > 10 || this.objectC[i].examenRemedial > 10 || this.objectC[i].examenSupletorio > 10) {

      this.btnFinalizar3 = true;
      this.banderAux = true;
      this.mensajeerrormodal = "Alguna de las notas es mayor a 10 reviselas nuevamente";

      document.getElementById("openModalError").click();

    } else {
      if (this.banderAux) { this.btnFinalizar3 = true; } else { this.btnFinalizar3 = false; }


      var ochentaporciento = ((parseFloat(this.objectC[i].Puforo) + parseFloat(this.objectC[i].Putarea1)
        + parseFloat(this.objectC[i].Putarea2) + parseFloat(this.objectC[i].Putarea3) + parseFloat(this.objectC[i].Putarea4)
        + parseFloat(this.objectC[i].Puexamen) +

        parseFloat(this.objectC[i].Suforo) + parseFloat(this.objectC[i].Sutarea1) + parseFloat(this.objectC[i].Sutarea2) +
        + parseFloat(this.objectC[i].Sutarea3) + parseFloat(this.objectC[i].Sutarea4) + parseFloat(this.objectC[i].Suexamen) +

        parseFloat(this.objectC[i].Tuforo) + parseFloat(this.objectC[i].Tutarea1) + parseFloat(this.objectC[i].Tutarea2) +
        parseFloat(this.objectC[i].Tutarea3) + parseFloat(this.objectC[i].Tutarea4) + parseFloat(this.objectC[i].Tuexamen) +

        parseFloat(this.objectC[i].Cuforo) + parseFloat(this.objectC[i].Cutarea1) + parseFloat(this.objectC[i].Cutarea2) +
        parseFloat(this.objectC[i].Cutarea3) + parseFloat(this.objectC[i].Cutarea4) + parseFloat(this.objectC[i].Cuexamen) +

        parseFloat(this.objectC[i].Quforo) + parseFloat(this.objectC[i].Qutarea1) + parseFloat(this.objectC[i].Qutarea2) +
        parseFloat(this.objectC[i].Qutarea3) + parseFloat(this.objectC[i].Qutarea4) + parseFloat(this.objectC[i].Quexamen)

      ) / 30) * 0.8;



      var veinteporciento = (parseFloat(this.objectC[i].examenFinal) * 0.2)
      var promediofinal = ochentaporciento + veinteporciento;



      this.objectCalculableC[i].ochentaporciento = ochentaporciento.toFixed(2);
      this.objectCalculableC[i].veinteporciento = veinteporciento.toFixed(2);
      this.objectCalculableC[i].promedioFinal = promediofinal.toFixed(2);


      // calculos de examennes complementarios
      if (this.objectC[i].examenSupletorio >= 7) {
        this.objectCalculableC[i].promedioFinal = 7;

      }


      if (this.objectC[i].examenRemedial >= 7) {
        this.objectCalculableC[i].promedioFinal = 7;

      }


      if (this.objectC[i].examenGracia >= 7) {
        this.objectCalculableC[i].promedioFinal = 7;

      }

    }
  }

  calculosBInit(i) {


    if (this.objectB[i].Q1P1insumo1 > 10 || this.objectB[i].Q1P1insumo2 > 10 || this.objectB[i].Q1P1insumo3 > 10
      || this.objectB[i].Q1P1insumo4 > 10 || this.objectB[i].Q1P1insumo5 > 10 || this.objectB[i].Q1P1insumo6 > 10

      || this.objectB[i].Q1P2insumo1 > 10 || this.objectB[i].Q1P2insumo2 > 10 || this.objectB[i].Q1P2insumo3 > 10
      || this.objectB[i].Q1P2insumo4 > 10 || this.objectB[i].Q1P2insumo5 > 10 || this.objectB[i].Q1P2insumo6 > 10

      || this.objectB[i].Q1P3insumo1 > 10 || this.objectB[i].Q1P3insumo2 > 10 || this.objectB[i].Q1P3insumo3 > 10
      || this.objectB[i].Q1P3insumo4 > 10 || this.objectB[i].Q1P3insumo5 > 10 || this.objectB[i].Q1P3insumo6 > 10
      || this.objectB[i].examen1 > 10

      || this.objectB[i].Q2P1insumo1 > 10 || this.objectB[i].Q2P1insumo2 > 10 || this.objectB[i].Q2P1insumo3 > 10
      || this.objectB[i].Q2P1insumo4 > 10 || this.objectB[i].Q2P1insumo5 > 10 || this.objectB[i].Q2P1insumo6 > 10

      || this.objectB[i].Q2P2insumo1 > 10 || this.objectB[i].Q2P2insumo2 > 10 || this.objectB[i].Q2P2insumo3 > 10
      || this.objectB[i].Q2P2insumo4 > 10 || this.objectB[i].Q2P2insumo5 > 10 || this.objectB[i].Q2P2insumo6 > 10

      || this.objectB[i].Q2P3insumo1 > 10 || this.objectB[i].Q2P3insumo2 > 10 || this.objectB[i].Q2P3insumo3 > 10
      || this.objectB[i].Q2P3insumo4 > 10 || this.objectB[i].Q2P3insumo5 > 10 || this.objectB[i].Q2P3insumo6 > 10

      || this.objectB[i].examen2 > 10 || this.objectB[i].examenGracia > 10 || this.objectB[i].examenRemedial > 10 || this.objectB[i].examenSupletorio > 10) {
      this.btnFinalizar2 = true;
      this.banderAux = true;
      this.mensajeerrormodal = "Alguna de las notas es mayor a 10 reviselas nuevamente";

      document.getElementById("openModalError").click();

    } else {



      var ochentaporciento1 = ((parseFloat(this.objectB[i].Q1P1insumo1) + parseFloat(this.objectB[i].Q1P1insumo2)
        + parseFloat(this.objectB[i].Q1P1insumo3) + parseFloat(this.objectB[i].Q1P1insumo4) + parseFloat(this.objectB[i].Q1P1insumo5)
        + parseFloat(this.objectB[i].Q1P1insumo6) +

        parseFloat(this.objectB[i].Q1P2insumo1) + parseFloat(this.objectB[i].Q1P2insumo2) + parseFloat(this.objectB[i].Q1P2insumo3) +
        + parseFloat(this.objectB[i].Q1P2insumo4) + parseFloat(this.objectB[i].Q1P2insumo5) + parseFloat(this.objectB[i].Q1P2insumo6) +

        parseFloat(this.objectB[i].Q1P3insumo1) + parseFloat(this.objectB[i].Q1P3insumo2) + parseFloat(this.objectB[i].Q1P3insumo3) +
        parseFloat(this.objectB[i].Q1P3insumo4) + parseFloat(this.objectB[i].Q1P3insumo5) + parseFloat(this.objectB[i].Q1P3insumo6)) / 18) * 0.8;


      var veinteporciento1 = parseFloat(this.objectB[i].examen1) * 0.2;

      var promedio1 = ochentaporciento1 + veinteporciento1

      var ochentaporciento2 = ((parseFloat(this.objectB[i].Q2P1insumo1) + parseFloat(this.objectB[i].Q2P1insumo2)
        + parseFloat(this.objectB[i].Q2P1insumo3) + parseFloat(this.objectB[i].Q2P1insumo4) + parseFloat(this.objectB[i].Q2P1insumo5)
        + parseFloat(this.objectB[i].Q2P1insumo6) +

        parseFloat(this.objectB[i].Q2P2insumo1) + parseFloat(this.objectB[i].Q2P2insumo2) + parseFloat(this.objectB[i].Q2P2insumo3)
        + parseFloat(this.objectB[i].Q2P2insumo4) + parseFloat(this.objectB[i].Q2P2insumo5) + parseFloat(this.objectB[i].Q2P2insumo6) +

        parseFloat(this.objectB[i].Q2P3insumo1) + parseFloat(this.objectB[i].Q2P3insumo2) + parseFloat(this.objectB[i].Q2P3insumo3) +
        parseFloat(this.objectB[i].Q2P3insumo4) + parseFloat(this.objectB[i].Q2P3insumo5) + parseFloat(this.objectB[i].Q2P3insumo6)) / 18) * 0.8;


      var veinteporciento2 = parseFloat(this.objectB[i].examen2) * 0.2;
      var promedio2 = ochentaporciento2 + veinteporciento2
      var promedioPeriodo = (promedio1 + promedio2) / 2;


      this.objectCalculableB[i].ochentaporciento1 = ochentaporciento1.toFixed(2);
      this.objectCalculableB[i].veinteporciento1 = veinteporciento1.toFixed(2);
      this.objectCalculableB[i].promedio1 = promedio1.toFixed(2);
      this.objectCalculableB[i].ochentaporciento2 = ochentaporciento2.toFixed(2);
      this.objectCalculableB[i].veinteporciento2 = veinteporciento2.toFixed(2);
      this.objectCalculableB[i].promedio2 = promedio2.toFixed(2);
      this.objectCalculableB[i].promedioPeriodo = promedioPeriodo.toFixed(2);



      if (this.objectB[i].examenSupletorio >= 7) {
        this.objectCalculableB[i].promedioPeriodo = 7;

      }


      if (this.objectB[i].examenRemedial >= 7) {
        this.objectCalculableB[i].promedioPeriodo = 7;

      }


      if (this.objectB[i].examenGracia >= 7) {
        this.objectCalculableB[i].promedioPeriodo = 7;

      }


    }
  }

  calculosInit(i) {
    this.btnFinalizar = true;
    if (this.object[i].insumo1 > 10 || this.object[i].insumo2 > 10 || this.object[i].insumo3 > 10 || this.object[i].insumo4 > 10
      || this.object[i].insumo5 > 10 || this.object[i].insumo6 > 10 || this.object[i].insumo7 > 10 || this.object[i].insumo8 > 10
      || this.object[i].examen1 > 10 || this.object[i].insumo11 > 10 || this.object[i].insumo22 > 10 || this.object[i].insumo33 > 10
      || this.object[i].insumo44 > 10 || this.object[i].insumo55 > 10 || this.object[i].insumo66 > 10 || this.object[i].insumo77 > 10
      || this.object[i].insumo88 > 10 || this.object[i].examen2 > 10 || this.object[i].examenGracia > 10
      || this.object[i].examenRemedial > 10 || this.object[i].examenSupletorio > 10) {

      this.mensajeerrormodal = "Alguna de las notas es mayor a 10 reviselas nuevamente";
      document.getElementById("openModalError").click();

    } else {

      var ochentaporciento1 = ((parseFloat(this.object[i].insumo1) + parseFloat(this.object[i].insumo2)
        + parseFloat(this.object[i].insumo3) + parseFloat(this.object[i].insumo4) + parseFloat(this.object[i].insumo5)
        + parseFloat(this.object[i].insumo6) + parseFloat(this.object[i].insumo7) + parseFloat(this.object[i].insumo8)) / 8) * 0.8;

      var veinteporciento1 = parseFloat(this.object[i].examen1) * 0.2;
      var promedio1 = ochentaporciento1 + veinteporciento1
      var ochentaporciento2 = ((parseFloat(this.object[i].insumo11) + parseFloat(this.object[i].insumo22)
        + parseFloat(this.object[i].insumo33) + parseFloat(this.object[i].insumo44) + parseFloat(this.object[i].insumo55)
        + parseFloat(this.object[i].insumo66) + parseFloat(this.object[i].insumo77) + parseFloat(this.object[i].insumo88)) / 8) * 0.8;

      var veinteporciento2 = parseFloat(this.object[i].examen2) * 0.2;

      var promedio2 = ochentaporciento2 + veinteporciento2

      var promedioPeriodo = (promedio1 + promedio2) / 2;

      this.objectCalculable[i].ochentaporciento1 = ochentaporciento1.toFixed(2);
      this.objectCalculable[i].veinteporciento1 = veinteporciento1.toFixed(2);
      this.objectCalculable[i].promedio1 = promedio1.toFixed(2);
      this.objectCalculable[i].ochentaporciento2 = ochentaporciento2.toFixed(2);
      this.objectCalculable[i].veinteporciento2 = veinteporciento2.toFixed(2);
      this.objectCalculable[i].promedio2 = promedio2.toFixed(2);
      this.objectCalculable[i].promedioPeriodo = promedioPeriodo.toFixed(2);


      if (this.object[i].examenSupletorio >= 7) {
        this.objectCalculable[i].promedioPeriodo = 7;

      }


      if (this.object[i].examenRemedial >= 7) {
        this.objectCalculable[i].promedioPeriodo = 7;

      }


      if (this.object[i].examenGracia >= 7) {
        this.objectCalculable[i].promedioPeriodo = 7;

      }

    }
  }

  calculosCInit(i) {



    if (this.objectC[i].Puforo > 10 || this.objectC[i].Putarea1 > 10 || this.objectC[i].Putarea2 > 10
      || this.objectC[i].Putarea3 > 10 || this.objectC[i].Putarea4 > 10 || this.objectC[i].Puexamen > 10

      || this.objectC[i].Suforo > 10 || this.objectC[i].Sutarea1 > 10 || this.objectC[i].Sutarea2 > 10
      || this.objectC[i].Sutarea3 > 10 || this.objectC[i].Sutarea4 > 10 || this.objectC[i].Suexamen > 10

      || this.objectC[i].Tuforo > 10 || this.objectC[i].Tutarea1 > 10 || this.objectC[i].Tutarea2 > 10
      || this.objectC[i].Tutarea3 > 10 || this.objectC[i].Tutarea4 > 10 || this.objectC[i].Tuexamen > 10


      || this.objectC[i].Cuforo > 10 || this.objectC[i].Cutarea1 > 10 || this.objectC[i].Cutarea2 > 10
      || this.objectC[i].Cutarea3 > 10 || this.objectC[i].Cutarea4 > 10 || this.objectC[i].Cuexamen > 10

      || this.objectC[i].Quforo > 10 || this.objectC[i].Qutarea1 > 10 || this.objectC[i].Qutarea2 > 10
      || this.objectC[i].Qutarea3 > 10 || this.objectC[i].Qutarea4 > 10 || this.objectC[i].Quexamen > 10

      || this.objectC[i].examenFinal > 10 || this.objectC[i].examenGracia > 10 || this.objectC[i].examenRemedial > 10 || this.objectC[i].examenSupletorio > 10) {

      this.btnFinalizar3 = true;
      this.banderAux = true;
      this.mensajeerrormodal = "Alguna de las notas es mayor a 10 reviselas nuevamente";

      document.getElementById("openModalError").click();

    } else {
      var ochentaporciento = ((parseFloat(this.objectC[i].Puforo) + parseFloat(this.objectC[i].Putarea1)
        + parseFloat(this.objectC[i].Putarea2) + parseFloat(this.objectC[i].Putarea3) + parseFloat(this.objectC[i].Putarea4)
        + parseFloat(this.objectC[i].Puexamen) +

        parseFloat(this.objectC[i].Suforo) + parseFloat(this.objectC[i].Sutarea1) + parseFloat(this.objectC[i].Sutarea2) +
        + parseFloat(this.objectC[i].Sutarea3) + parseFloat(this.objectC[i].Sutarea4) + parseFloat(this.objectC[i].Suexamen) +

        parseFloat(this.objectC[i].Tuforo) + parseFloat(this.objectC[i].Tutarea1) + parseFloat(this.objectC[i].Tutarea2) +
        parseFloat(this.objectC[i].Tutarea3) + parseFloat(this.objectC[i].Tutarea4) + parseFloat(this.objectC[i].Tuexamen) +

        parseFloat(this.objectC[i].Cuforo) + parseFloat(this.objectC[i].Cutarea1) + parseFloat(this.objectC[i].Cutarea2) +
        parseFloat(this.objectC[i].Cutarea3) + parseFloat(this.objectC[i].Cutarea4) + parseFloat(this.objectC[i].Cuexamen) +

        parseFloat(this.objectC[i].Quforo) + parseFloat(this.objectC[i].Qutarea1) + parseFloat(this.objectC[i].Qutarea2) +
        parseFloat(this.objectC[i].Qutarea3) + parseFloat(this.objectC[i].Qutarea4) + parseFloat(this.objectC[i].Quexamen)

      ) / 30) * 0.8;



      var veinteporciento = (parseFloat(this.objectC[i].examenFinal) * 0.2)
      var promediofinal = ochentaporciento + veinteporciento;



      this.objectCalculableC[i].ochentaporciento = ochentaporciento.toFixed(2);
      this.objectCalculableC[i].veinteporciento = veinteporciento.toFixed(2);
      this.objectCalculableC[i].promedioFinal = promediofinal.toFixed(2);


      // calculos de examennes complementarios
      if (this.objectC[i].examenSupletorio >= 7) {
        this.objectCalculableC[i].promedioFinal = 7;

      }


      if (this.objectC[i].examenRemedial >= 7) {
        this.objectCalculableC[i].promedioFinal = 7;

      }


      if (this.objectC[i].examenGracia >= 7) {
        this.objectCalculableC[i].promedioFinal = 7;

      }

    }
  }


  // esto puede servir pero aun no ocupo

  bloqueo(i) {



    if (this.object[i].insumo1 != 0) { this.banderInsumo1 = true; }
    if (this.object[i].insumo2 != 0) { this.banderInsumo2 = true; }
    if (this.object[i].insumo3 != 0) { this.banderInsumo3 = true; }
    if (this.object[i].insumo4 != 0) { this.banderInsumo4 = true; }
    if (this.object[i].insumo5 != 0) { this.banderInsumo5 = true; }
    if (this.object[i].insumo6 != 0) { this.banderInsumo6 = true; }
    if (this.object[i].insumo7 != 0) { this.banderInsumo7 = true; }
    if (this.object[i].insumo8 != 0) { this.banderInsumo8 = true }
    if (this.object[i].examen1 != 0) { }
    if (this.object[i].insumo11 != 0) { }
    if (this.object[i].insumo22 != 0) { }

    if (this.object[i].insumo33 != 0) { }

    if (this.object[i].insumo44 != 0) { }

    if (this.object[i].insumo55 != 10) { }

    if (this.object[i].insumo66 != 0) {

    }

    if (this.object[i].insumo77 != 0) { }

    if (this.object[i].insumo88 != 0) { }

    if (this.object[i].examen2 != 0) { }

    if (this.object[i].examenGracia != 0) { }


    if (this.object[i].examenRemedial != 0) { }

    if (this.object[i].examenSupletorio > 10) {


    }
  }


  habilitarGR() {
    this.btnFinalizar = true;
    this.btnHabilitarExportacion = true;
  }
  habilitarGRB() {
    this.btnFinalizar2 = true;
    this.btnHabilitarExportacion = true;
  }

  habilitarGRC() {
    this.btnFinalizar3 = true;
    this.btnHabilitarExportacion = true;
  }

  getListadoMisMaterias() {

    this.vectorListadoMisMaterias = [];
    this.subscribe6 = this._materiaService.getListadoMioMateria().subscribe(response => {

      if (response.materias[0] != undefined) {
        this.vectorListadoMisMaterias = response.materias;
        console.log("vector lsitado materias", this.vectorListadoMisMaterias)
      }
    }, (err) => { console.log("Existen Complicaciones Intente mas tarde", err) }
    );

  }


  getSubirNotas() {


    this.subscribe7 = this._administradorService.getSubirNotas().subscribe(response => {
      console.log("este es el estado de nota", response)
      if (response.subirnota != undefined) {
        if (response.subirnota.ESTADO_SUBIRNOTA == '1') {
          this.mensajeerrormodal = "Tu periodo de asignacion de notas ha finalizado espera hasta la siguiente activacion";
          document.getElementById("openModalError").click();
          this.banderSubirNotas = false;
        } else { this.banderSubirNotas = true }

      }
    }, (err) => { console.log("Existen Complicaciones Intente mas tarde", err) }
    );

  }

  getPeriodoActual() {


    this.subscribe8 = this._administradorService.getPeriodoActual().subscribe(response => {
      console.log("este es el periodo que vino", response.periodo)
      if (response.periodo != undefined) {
        this.periodoLectivoActual = response.periodo;

      }
    }, (err) => { console.log("Existen Complicaciones Intente mas tarde", err) }
    );

  }

  asignarMateriaCurso(value) {

    this.banderInsumo = false;
    this.recivir = "";
    this.object = [];
    this.objectCalculable = [];
    this.objectB = [];
    this.objectCalculableB = [];
    this.objectC = [];
    this.objectCalculableC = [];

    var busqueda = value.split(",");
    this.loading = true;
    this.Titulo1 = busqueda[2] + " " + busqueda[4];
    this.Titulo2 = busqueda[3];
    this.guardarMateriaMatricula = busqueda[1];
    console.log("busqueda", busqueda);

    this.subscribe9 = this._matriculaServices.buscarEstudianteMatricula(busqueda[0]).subscribe(
      response => {

        this.listadoEstudianteMatriculas = this.ordenar(response.matriculas);


        console.log("para habilitar  tablas", busqueda[2]);
        console.log("listado estudfiante", this.listadoEstudianteMatriculas)

        if (busqueda[2].indexOf("(DISTANCIA VIRTUAL)") != -1) {
          this.banderTabla1 = false;
          this.banderTabla2 = false;
          this.banderTabla3 = true;


          for (let i = 0; i < Object.keys(this.listadoEstudianteMatriculas).length; i++) {

            this.objectC.push(this.objNC = new NotaC("", "", "", "", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"));
            this.objectCalculableC.push(this.objNCC = new CalculableC("0", "0", "0"));
          }
          console.log("estas es la materia a busca", busqueda[1]);
          console.log("this.object", this.objectC)
          var objBuscarNotas = {
            materia: busqueda[1],
            buscar: this.listadoEstudianteMatriculas
          }
          this.traerNotasC(objBuscarNotas);
          this.DescripcionInsumosC();

        } else if (busqueda[2].indexOf("BÁSICO SUPERIOR INTENSIVO") != -1) {


          this.loading = false;
          this.banderTabla1 = false;
          this.banderTabla2 = true;
          this.banderTabla3 = false;


          for (let i = 0; i < Object.keys(this.listadoEstudianteMatriculas).length; i++) {

            this.objectB.push(this.objB = new NotaBasica("", "", "", "", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"));
            this.objectCalculableB.push(this.objC = new Calculable("0", "0", "0", "0", "0", "0", "0"));

          }
          console.log("estas es la materia a busca", busqueda[1]);
          var objBuscarNotas = {

            materia: busqueda[1],
            buscar: this.listadoEstudianteMatriculas
          }
          console.log("objeto para buscar notas", objBuscarNotas);
          this.traerNotasB(objBuscarNotas);
          this.DescripcionInsumosB();






        } else if (busqueda[2].indexOf("(SEMIPRESENCIAL)") != -1) {
          this.banderTabla1 = true;
          this.banderTabla2 = false;
          this.banderTabla3 = false;

          for (let i = 0; i < Object.keys(this.listadoEstudianteMatriculas).length; i++) {

            this.object.push(this.obj = new Nota("", "", "", "", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"));
            this.objectCalculable.push(this.objC = new Calculable("0", "0", "0", "0", "0", "0", "0"));

          }

          console.log("estas es la materia a busca", busqueda[1]);


          var objBuscarNotas = {

            materia: busqueda[1],
            buscar: this.listadoEstudianteMatriculas
          }
          this.traerNotas(objBuscarNotas);
          this.DescripcionInsumos();
          //this.traerNotasB(objBuscarNotas);


        }


      },
      error => {
        this.loading = false;
        var errorMessage = <any>error;
        if (errorMessage) {
          console.log(errorMessage);
          try {
            var body = JSON.parse(error._body);
            errorMessage = body.message;
          } catch {
            errorMessage = "No hay conexión intentelo más tarde";
            this.loading = false;
            document.getElementById("openModalError").click();
          }
          // this.loading =false;
        }
        // this.loading =false;
      }

    );

  }

  ordenar(vector1) {
    var cont;
    let vector = vector1;

    console.log('<<<<<< MI VECTOR ANTES DE LA ORDENADA >>>>>>', vector);
    cont = 0;
    vector.forEach(() => {
      cont += 1;
    });
    console.log(cont);
    for (let k = 0; k < cont - 1; k++) {
      //console.log('mi FOR', vector[k]);
      for (let f = 0; f < (cont - 1) - k; f++) {
        // console.log('mi FOR', vector[f]);
        if (vector[f].ESTUDIANTE.APELLIDO_ESTUDIANTE.localeCompare(vector[f + 1].ESTUDIANTE.APELLIDO_ESTUDIANTE) > 0) {
          let aux;
          aux = vector[f];
          vector[f] = vector[f + 1];
          vector[f + 1] = aux;
        }
      }
    }
    console.log("<<<<<< MI VECTOR DESPUES DE LA ORDENADA >>>>>>", vector);
    return vector;
  }
  traerNotas(value) {
    console.log("value curso para nota", value);

    this.subscribe10 = this._notaService.buscarNotas(value).subscribe(
      response => {
        this.loading = false;
        this.listadoEstudianteNotas = response.vectorNotas;

        console.log("listadoEstudainteMatricula", this.listadoEstudianteMatriculas, "listadoEstudianteNotas", this.listadoEstudianteNotas);
        //  ordenar
        let i = 0;
        this.listadoEstudianteMatriculas.forEach(elementE => {

          this.listadoEstudianteNotas.forEach(element => {

            console.log("elementoE", elementE.ESTUDIANTE.ID_ESTUDIANTE, "elemento", element.ID_ESTUDIANTE)
            if (element != null) {
              if (elementE.ESTUDIANTE.ID_ESTUDIANTE == element.ID_ESTUDIANTE) {
                this.object[i].insumo1 = element.INSUMO1;
                this.object[i].insumo2 = element.INSUMO2;
                this.object[i].insumo3 = element.INSUMO3;
                this.object[i].insumo4 = element.INSUMO4;
                this.object[i].insumo5 = element.INSUMO5;
                this.object[i].insumo6 = element.INSUMO6;
                this.object[i].insumo7 = element.INSUMO7;
                this.object[i].insumo8 = element.INSUMO8;
                this.object[i].examen1 = element.EXAMEN1;

                this.object[i].insumo11 = element.INSUMO11;
                this.object[i].insumo22 = element.INSUMO22;
                this.object[i].insumo33 = element.INSUMO33;
                this.object[i].insumo44 = element.INSUMO44;
                this.object[i].insumo55 = element.INSUMO55;
                this.object[i].insumo66 = element.INSUMO66;
                this.object[i].insumo77 = element.INSUMO77;
                this.object[i].insumo88 = element.INSUMO88;

                this.object[i].examen2 = element.EXAMEN2;
                this.object[i].examenSupletorio = element.EXAMENSUPLETORIO;
                this.object[i].examenRemedial = element.EXAMENREMEDIAL;
                this.object[i].examenGracia = element.EXAMENGRACIA;

                this.calculosInit(i);


              }
            }
          });
          i++;
        });



        this.loading = false;

      },
      error => {
        this.loading = false;
        var errorMessage = <any>error;
        if (errorMessage) {
          console.log(errorMessage);
          try {
            var body = JSON.parse(error._body);
            errorMessage = body.message;
          } catch {
            errorMessage = "No hay conexión intentelo más tarde";
            this.loading = false;
            document.getElementById("openModalError").click();
          }
          // this.loading =false;
        }
        // this.loading =false;
      }


    );

  }



  traerNotasB(value) {
    console.log("value curso para notab", value);

    this.subscribe11 = this._notaService.buscarNotasB(value).subscribe(
      response => {
        this.loading = false;


        this.listadoEstudianteNotas = response.vectorNotas;
        debugger;
        console.log("listado estudiantes notab", this.listadoEstudianteNotas);
        //  ordenar
        let i = 0;

        this.listadoEstudianteMatriculas.forEach(elementE => {

          this.listadoEstudianteNotas.forEach(element => {


            if (element != null) {
              if (elementE.ESTUDIANTE.ID_ESTUDIANTE == element.ID_ESTUDIANTE) {
                this.objectB[i].Q1P1insumo1 = element.Q1P1INSUMO1;
                this.objectB[i].Q1P1insumo2 = element.Q1P1INSUMO2;
                this.objectB[i].Q1P1insumo3 = element.Q1P1INSUMO3;
                this.objectB[i].Q1P1insumo4 = element.Q1P1INSUMO4;
                this.objectB[i].Q1P1insumo5 = element.Q1P1INSUMO5;
                this.objectB[i].Q1P1insumo6 = element.Q1P1INSUMO6;

                this.objectB[i].Q1P2insumo1 = element.Q1P2INSUMO1;
                this.objectB[i].Q1P2insumo2 = element.Q1P2INSUMO2;
                this.objectB[i].Q1P2insumo3 = element.Q1P2INSUMO3;
                this.objectB[i].Q1P2insumo4 = element.Q1P2INSUMO4;
                this.objectB[i].Q1P2insumo5 = element.Q1P2INSUMO5;
                this.objectB[i].Q1P2insumo6 = element.Q1P2INSUMO6;

                this.objectB[i].Q1P3insumo1 = element.Q1P3INSUMO1;
                this.objectB[i].Q1P3insumo2 = element.Q1P3INSUMO2;
                this.objectB[i].Q1P3insumo3 = element.Q1P3INSUMO3;
                this.objectB[i].Q1P3insumo4 = element.Q1P3INSUMO4;
                this.objectB[i].Q1P3insumo5 = element.Q1P3INSUMO5;
                this.objectB[i].Q1P3insumo6 = element.Q1P3INSUMO6;


                this.objectB[i].examen1 = element.EXAMEN1;

                this.objectB[i].Q2P1insumo1 = element.Q2P1INSUMO1;
                this.objectB[i].Q2P1insumo2 = element.Q2P1INSUMO2;
                this.objectB[i].Q2P1insumo3 = element.Q2P1INSUMO3;
                this.objectB[i].Q2P1insumo4 = element.Q2P1INSUMO4;
                this.objectB[i].Q2P1insumo5 = element.Q2P1INSUMO5;
                this.objectB[i].Q2P1insumo6 = element.Q2P1INSUMO6;

                this.objectB[i].Q2P2insumo1 = element.Q2P2INSUMO1;
                this.objectB[i].Q2P2insumo2 = element.Q2P2INSUMO2;
                this.objectB[i].Q2P2insumo3 = element.Q2P2INSUMO3;
                this.objectB[i].Q2P2insumo4 = element.Q2P2INSUMO4;
                this.objectB[i].Q2P2insumo5 = element.Q2P2INSUMO5;
                this.objectB[i].Q2P2insumo6 = element.Q2P2INSUMO6;

                this.objectB[i].Q2P3insumo1 = element.Q2P3INSUMO1;
                this.objectB[i].Q2P3insumo2 = element.Q2P3INSUMO2;
                this.objectB[i].Q2P3insumo3 = element.Q2P3INSUMO3;
                this.objectB[i].Q2P3insumo4 = element.Q2P3INSUMO4;
                this.objectB[i].Q2P3insumo5 = element.Q2P3INSUMO5;
                this.objectB[i].Q2P3insumo6 = element.Q2P3INSUMO6;

                this.objectB[i].examen2 = element.EXAMEN2;
                this.objectB[i].examenSupletorio = element.EXAMENSUPLETORIO;
                this.objectB[i].examenRemedial = element.EXAMENREMEDIAL;
                this.objectB[i].examenGracia = element.EXAMENGRACIA;

                this.calculosBInit(i);


              }
            }
          });
          i++;
        });



        this.loading = false;

      },
      error => {
        this.loading = false;
        var errorMessage = <any>error;
        if (errorMessage) {
          console.log(errorMessage);
          try {
            var body = JSON.parse(error._body);
            errorMessage = body.message;
          } catch {
            errorMessage = "No hay conexión intentelo más tarde";
            this.loading = false;
            document.getElementById("openModalError").click();
          }
          // this.loading =false;
        }
        // this.loading =false;
      }

    );

  }


  traerNotasC(value) {
    console.log("value curso para notab", value);

    this.subscribe11 = this._notaService.buscarNotasC(value).subscribe(
      response => {
        this.loading = false;


        this.listadoEstudianteNotas = response.vectorNotas;
        debugger;
        console.log("listado estudiantes notab", this.listadoEstudianteNotas);
        //  ordenar
        let i = 0;

        this.listadoEstudianteMatriculas.forEach(elementE => {

          this.listadoEstudianteNotas.forEach(element => {


            if (element != null) {
              if (elementE.ESTUDIANTE.ID_ESTUDIANTE == element.ID_ESTUDIANTE) {
                this.objectC[i].Puforo = element.PUFORO;
                this.objectC[i].Putarea1 = element.PUTAREA1;
                this.objectC[i].Putarea2 = element.PUTAREA2;
                this.objectC[i].Putarea3 = element.PUTAREA3;
                this.objectC[i].Putarea4 = element.PUTAREA4;
                this.objectC[i].Puexamen = element.PUEXAMEN;

                this.objectC[i].Suforo = element.SUFORO;
                this.objectC[i].Sutarea1 = element.SUTAREA1;
                this.objectC[i].Sutarea2 = element.SUTAREA2;
                this.objectC[i].Sutarea3 = element.SUTAREA3;
                this.objectC[i].Sutarea4 = element.SUTAREA4;
                this.objectC[i].Suexamen = element.SUEXAMEN;

                this.objectC[i].Tuforo = element.TUFORO;
                this.objectC[i].Tutarea1 = element.TUTAREA1;
                this.objectC[i].Tutarea2 = element.TUTAREA2;
                this.objectC[i].Tutarea3 = element.TUTAREA3;
                this.objectC[i].Tutarea4 = element.TUTAREA4;
                this.objectC[i].Tuexamen = element.TUEXAMEN;


                this.objectC[i].Cuforo = element.CUFORO;
                this.objectC[i].Cutarea1 = element.CUTAREA1;
                this.objectC[i].Cutarea2 = element.CUTAREA2;
                this.objectC[i].Cutarea3 = element.CUTAREA3;
                this.objectC[i].Cutarea4 = element.CUTAREA4;
                this.objectC[i].Cuexamen = element.CUEXAMEN;

                this.objectC[i].Quforo = element.QUFORO;
                this.objectC[i].Qutarea1 = element.QUTAREA1;
                this.objectC[i].Qutarea2 = element.QUTAREA2;
                this.objectC[i].Qutarea3 = element.QUTAREA3;
                this.objectC[i].Qutarea4 = element.QUTAREA4;
                this.objectC[i].Quexamen = element.QUEXAMEN;

                this.objectC[i].examenFinal = element.EXAMENFINAL;
                this.objectC[i].examenSupletorio = element.EXAMENSUPLETORIO;
                this.objectC[i].examenRemedial = element.EXAMENREMEDIAL;
                this.objectC[i].examenGracia = element.EXAMENGRACIA;

                this.calculosCInit(i);


              }
            }
          });
          i++;
        });



        this.loading = false;

      },
      error => {
        this.loading = false;
        var errorMessage = <any>error;
        if (errorMessage) {
          console.log(errorMessage);
          try {
            var body = JSON.parse(error._body);
            errorMessage = body.message;
          } catch {
            errorMessage = "No hay conexión intentelo más tarde";
            this.loading = false;
            document.getElementById("openModalError").click();
          }
          // this.loading =false;
        }
        // this.loading =false;
      }

    );

  }




  registroNotas() {
    console.log("bandera de subir notas", this.banderSubirNotas);
    if (this.banderSubirNotas == true) {
      this.banderaHabilitar = true;
      this.pruebaclick();
      if (this.banderAux == false) {
        let i = 0;
        /* this.object.forEach(element => {
           this.object[i].insumo1 =  this.object[i].insumo1.replace(',', '.');
           this.object[i].insumo2 =  this.object[i].insumo2.replace(',', '.');
           this.object[i].insumo3 =  this.object[i].insumo3.replace(',', '.');
           this.object[i].insumo4 =  this.object[i].insumo4.replace(',', '.');
           this.object[i].insumo5 =  this.object[i].insumo5.replace(',', '.');
           this.object[i].insumo6 =  this.object[i].insumo6.replace(',', '.');
           this.object[i].insumo7 =  this.object[i].insumo7.replace(',', '.');
           this.object[i].insumo8 =  this.object[i].insumo8.replace(',', '.');
           this.object[i].examen1 =  this.object[i].examen1.replace(',', '.');
           this.object[i].insumo11 =  this.object[i].insumo11.replace(',', '.');
           this.object[i].insumo22 =  this.object[i].insumo22.replace(',', '.');
           this.object[i].insumo33=  this.object[i].insumo33.replace(',', '.');
           this.object[i].insumo44 =  this.object[i].insumo44.replace(',', '.');
           this.object[i].insumo55 =  this.object[i].insumo55.replace(',', '.');
           this.object[i].insumo66 =  this.object[i].insumo66.replace(',', '.');
           this.object[i].insumo77 =  this.object[i].insumo77.replace(',', '.');
           this.object[i].insumo88 =  this.object[i].insumo88.replace(',', '.');
           this.object[i].examen2 =  this.object[i].examen2.replace(',', '.');
           this.object[i].examenGracia =  this.object[i].examenGracia.replace(',', '.');
           this.object[i].examenRemedial =  this.object[i].examenRemedial.replace(',', '.');
           this.object[i].examenSupletorio =  this.object[i].examenSupletorio.replace(',', '.');
           i++;
         });*/

        console.log("notas antes de registrarse", this.object);

        this.subscribe12 = this._notaService.registerNota(this.object).subscribe(
          response => {
            // this.btnFinalizar=true;
            this.banderaHabilitar = true;
            this.mensajecorrectomodals = response.message;
            console.log("satisfactoriamente");
            this.loading = false;
            document.getElementById("openModalCorrecto").click();
            this.btnHabilitarExportacion = false;

          },
          error => {
            this.btnFinalizar = true;
            this.banderaHabilitar = false;
            var errorMessage = <any>error;
            if (errorMessage) {
              this.mensajeerrormodals = JSON.parse(errorMessage._body).message;
              document.getElementById("openModalError").click();
              try {
                var body = JSON.parse(error._body);
                errorMessage = body.message;
              } catch {
                errorMessage = "No hay conexión intentelo más tarde";
                this.loading = false;
                document.getElementById("openModalError").click();
              }
              this.loading = false;
            }
          }
        );
      }
    } else {
      this.mensajeerrormodal = "Tu periodo de asignacion de notas ha finalizado espera hasta la siguiente activacion";
      document.getElementById("openModalError").click();
    }
  }

  registroNotasB() {
    console.log("bandera de subir notas", this.banderSubirNotas);
    if (this.banderSubirNotas == true) {
      this.banderaHabilitarB = true;
      this.pruebaclick();
      if (this.banderAux == false) {


        this.subscribe13 = this._notaService.registerNotaB(this.objectB).subscribe(
          response => {
            this.mensajecorrectomodals = response.message;
            console.log("satisfactoriamente");
            //this.loading = false;
            document.getElementById("openModalCorrecto").click();
            //this.btnFinalizar2 = true;
            this.banderaHabilitarB = true;
            this.btnHabilitarExportacion = false;
          },
          error => {
            this.btnFinalizar2 = true;
            this.banderaHabilitarB = false;
            var errorMessage = <any>error;
            if (errorMessage) {
              this.mensajeerrormodals = JSON.parse(errorMessage._body).message;
              document.getElementById("openModalError").click();
              try {
                var body = JSON.parse(error._body);
                errorMessage = body.message;
              } catch {
                errorMessage = "No hay conexión intentelo más tarde";
                this.loading = false;
                document.getElementById("openModalError").click();
              }
              this.loading = false;
            }
          }
        );
      }
    } else {
      this.mensajeerrormodal = "Tu periodo de asignacion de notas ha finalizado espera hasta la siguiente activacion";
      document.getElementById("openModalError").click();
    }
  }


  registroNotasC() {
    console.log("bandera de subir notas", this.banderSubirNotas);
    console.log("notas c antes de enviar", this.objectC)
    if (this.banderSubirNotas == true) {
      this.banderaHabilitarC = true;
      this.pruebaclick();
      if (this.banderAux == false) {


        this.subscribe13 = this._notaService.registerNotaC(this.objectC).subscribe(
          response => {
            this.mensajecorrectomodals = response.message;
            console.log("satisfactoriamente");
            //this.loading = false;
            document.getElementById("openModalCorrecto").click();
            //this.btnFinalizar2 = true;
            this.banderaHabilitarC = true;
            this.btnHabilitarExportacion = false;
          },
          error => {
            this.btnFinalizar2 = true;
            this.banderaHabilitarC = false;
            var errorMessage = <any>error;
            if (errorMessage) {
              this.mensajeerrormodals = JSON.parse(errorMessage._body).message;
              document.getElementById("openModalError").click();
              try {
                var body = JSON.parse(error._body);
                errorMessage = body.message;
              } catch {
                errorMessage = "No hay conexión intentelo más tarde";
                this.loading = false;
                document.getElementById("openModalError").click();
              }
              this.loading = false;
            }
          }
        );
      }
    } else {
      this.mensajeerrormodal = "Tu periodo de asignacion de notas ha finalizado espera hasta la siguiente activacion";
      document.getElementById("openModalError").click();
    }
  }

  logout() {
    this._docenteService.logout();
    location.reload(true);
  }


  generarPdf() {

    interface jsPDFWithPlugin extends jsPDF {
      autoTable: (options: UserOptions) => jsPDF;
    }
    this.loading = true;
    var logo = new Image();
    logo.src = '../../assets/imgs/logo.png';


    const doc = new jsPDF('l', 'px', 'a4') as jsPDFWithPlugin;;

    var pageWidth = doc.internal.pageSize.width
    doc.addImage(logo, 'PNG', 30, 15, 100, 80);
    doc.fromHTML("<h2>COLEGIO DE BACHILLERATO PCEI EBENEZER</h2>", 170, 2);
    doc.fromHTML("<h4>ACTA DE CALIFICACIÓN POR PERIODO" + "  " + this.periodoLectivoActual + "</h4>", 170, 28);

    doc.fromHTML("<h4  style='text-align: center' >MATERIA: " + this.Titulo2 + "</h4>", 170, 75);
    doc.fromHTML("<h4  style='text-align: center'>DOCENTE: " + this.identity.APELLIDO_DOCENTE + " " + this.identity.NOMBRE_DOCENTE + "</h4>", 170, 100);
    var cont = this.listadoEstudianteNotas.length;



    if (this.banderTabla3) {
      doc.fromHTML("<h4  style='text-align: center' >" + this.Titulo1 + "</h4>", 170, 48);
      doc.autoTable({
        html: '#results3', startY: 150, columnStyles: {

          32: { fillColor: [249, 247, 95] }, 34: { fillColor: [249, 247, 95] }, 35: { fillColor: [191, 250, 119] }
        }, styles: {
          overflow: 'linebreak',
          fontSize: 5,
          cellWidth: 'auto',
          cellPadding: 2
        }
      });

      var pageHeight = doc.internal.pageSize.height;
      doc.fromHTML(" <h4 style='text-align: center'>------------------------------------------</h4>", 110, pageHeight - pageHeight / 10);
      doc.fromHTML(" <h4 style='text-align: center'>------------------------------------------</h4>", 260, pageHeight - pageHeight / 10);
      doc.fromHTML(" <h4 style='text-align: center'>------------------------------------------</h4>", 400, pageHeight - pageHeight / 10);
      doc.fromHTML(" <p style='text-align: center'>DOCENTE</p>", 150, pageHeight - (pageHeight / 13));
      doc.fromHTML(" <p style='text-align: center'>SECRETARIA</p>", 300, pageHeight - (pageHeight / 13));
      doc.fromHTML(" <p style='text-align: center'>RECTOR(A)</p>", 445, pageHeight - (pageHeight / 13));
      this.loading = false;
      console.log("================================ " + pageHeight)
      doc.save('Reporte_Notas_Docente.pdf');



    } else
      if (this.banderTabla1) {
        doc.fromHTML("<h4  style='text-align: center' >" + this.Titulo1 + "</h4>", 200, 48);
        doc.autoTable({
          html: '#results', startY: 150, columnStyles: {
            6: { fillColor: [247, 83, 116] },
            10: { fillColor: [249, 247, 95] },
            12: { fillColor: [249, 247, 95] },
            13: { fillColor: [207, 233, 176] }, 22: { fillColor: [249, 247, 95] }, 24: { fillColor: [249, 247, 95] },
            25: { fillColor: [207, 233, 176] }, 26: { fillColor: [191, 250, 119] }
          }, styles: {
            overflow: 'linebreak',
            fontSize: 5,
            rowHeight: 5,
            cellWidth: 'auto',
            cellPadding: 2
          }
        });

        var pageHeight = doc.internal.pageSize.height;
        doc.fromHTML(" <h4 style='text-align: center'>------------------------------------------</h4>", 110, pageHeight - pageHeight / 10);
        doc.fromHTML(" <h4 style='text-align: center'>------------------------------------------</h4>", 260, pageHeight - pageHeight / 10);
        doc.fromHTML(" <h4 style='text-align: center'>------------------------------------------</h4>", 400, pageHeight - pageHeight / 10);
        doc.fromHTML(" <p style='text-align: center'>DOCENTE</p>", 150, pageHeight - pageHeight / 13);
        doc.fromHTML(" <p style='text-align: center'>SECRETARIA</p>", 300, pageHeight - pageHeight / 13);
        doc.fromHTML(" <p style='text-align: center'>RECTOR(A)</p>", 445, pageHeight - pageHeight / 13);
        this.loading = false;

        doc.save('Reporte_Notas_Docente.pdf');



      } else {

        doc.fromHTML("<h4  style='text-align: center' >" + this.Titulo1 + "</h4>", 240, 48);

        doc.autoTable({

          html: '#results2', startY: 150, margin: { left: 30 }, columnStyles: {
            20: { fillColor: [249, 247, 95] },
            22: { fillColor: [249, 247, 95] },
            23: { fillColor: [207, 233, 176] }, 42: { fillColor: [249, 247, 95] }, 44: { fillColor: [249, 247, 95] },
            45: { fillColor: [207, 233, 176] }, 46: { fillColor: [191, 250, 119] }
          }, styles: {
            overflow: 'linebreak',
            fontSize: 5,
            rowHeight: 0,
            cellWidth: 'auto',
            cellPadding: 2,

            //calculateWidths: 300

          }

        });
        var pageHeight = doc.internal.pageSize.height;
        doc.fromHTML(" <h4 style='text-align: center'>------------------------------------------</h4>", 130, pageHeight - pageHeight / 10);
        doc.fromHTML(" <h4 style='text-align: center'>------------------------------------------</h4>", 380, pageHeight - pageHeight / 10);
        doc.fromHTML(" <h4 style='text-align: center'>DOCENTE</h4>", 170, pageHeight - pageHeight / 13);
        doc.fromHTML(" <h4 style='text-align: center'>RECTOR</h4>", 425, pageHeight - pageHeight / 13);
        this.loading = false;

        doc.save('Reporte_Notas_Docente.pdf');

      }

  }
  public VreporteExcel;

  generarExel(variable) {

    if (variable == 3) {
      console.log("lo que estoy probando", this.objectC)
      this.VreporteExcel = this.objectC;
      for (var i in this.VreporteExcel) {
        this.VreporteExcel[i].estudiante = this.listadoEstudianteMatriculas[i].ESTUDIANTE.APELLIDO_ESTUDIANTE + " " + this.listadoEstudianteMatriculas[i].ESTUDIANTE.NOMBRE_ESTUDIANTE;
        delete this.VreporteExcel[i]._id;
        delete this.VreporteExcel[i].materia;
        delete this.VreporteExcel[i].periodo;
        this.objectC[i].Ochenta_P = this.objectCalculableC[i].ochentaporciento;
        this.objectC[i].Veinte_P = this.objectCalculableC[i].veinteporciento;
        this.objectC[i].promedioFinal = this.objectCalculableC[i].promedioFinal;
      }
    } else

      if (variable == 1) {
        this.VreporteExcel = this.object;
        for (var i in this.VreporteExcel) {
          this.VreporteExcel[i].estudiante = this.listadoEstudianteMatriculas[i].ESTUDIANTE.APELLIDO_ESTUDIANTE + " " + this.listadoEstudianteMatriculas[i].ESTUDIANTE.NOMBRE_ESTUDIANTE;
          delete this.VreporteExcel[i]._id;
          delete this.VreporteExcel[i].materia;
          delete this.VreporteExcel[i].periodo;
          this.object[i].ochenta_p1 = this.objectCalculable[i].ochentaporciento1;
          this.object[i].veinte_p1 = this.objectCalculable[i].veinteporciento1;
          this.object[i].promedio1 = this.objectCalculable[i].promedio1;
          this.object[i].ochenta_p2 = this.objectCalculable[i].ochentaporciento2;
          this.object[i].veinte_p2 = this.objectCalculable[i].veinteporciento2;
          this.object[i].promedio2 = this.objectCalculable[i].promedio2;

        }
      } else {
        this.VreporteExcel = this.objectB;
        for (var i in this.VreporteExcel) {
          this.VreporteExcel[i].estudiante = this.listadoEstudianteMatriculas[i].ESTUDIANTE.APELLIDO_ESTUDIANTE + " " + this.listadoEstudianteMatriculas[i].ESTUDIANTE.NOMBRE_ESTUDIANTE;
          delete this.VreporteExcel[i]._id;
          delete this.VreporteExcel[i].materia;
          delete this.VreporteExcel[i].periodo;
          this.objectB[i].Ochenta_P1 = this.objectCalculableB[i].ochentaporciento1;
          this.objectB[i].Veinte_P1 = this.objectCalculableB[i].veinteporciento1;
          this.objectB[i].Promedio1 = this.objectCalculableB[i].promedio1;
          this.objectB[i].Ochenta_P2 = this.objectCalculableB[i].ochentaporciento2;
          this.objectB[i].Veinte_P2 = this.objectCalculableB[i].veinteporciento2;
          this.objectB[i].Promedio2 = this.objectCalculableB[i].promedio2;
        }
      }
    // var materias = [];
    // materias.push("NOMBRES Y APELLIDOS");
    // for (var i in this.listadoMateriasCurso) {
    //   materias.push(this.listadoMateriasCurso[i].nombre);
    // }
    // for (var i in this.listadoEstudianteMatriculas) {
    //   this.VreporteExcel[i].unshift(this.listadoEstudianteMatriculas[i].estudiante.apellido + " " + this.listadoEstudianteMatriculas[i].estudiante.nombre);
    // }
    // this.VreporteExcel.unshift(materias);
    console.log("esto es antes de generar excel", this.VreporteExcel);

    this.excelService.exportAsExcelFileD(this.VreporteExcel, 'Consolidado_Final', this.listadoInsumos);
    // this.nuevo2.shift();
    // for (var i in this.listadoEstudianteMatriculas) {
    //   this.nuevo2[i].shift();
    // }
  }


  public VnotasExcel: any;

  async leerExcel(variable: any, event: any) {
    this.loading = true;
    this.VnotasExcel = await this.excelService.leerExcel(event)

    if (variable == 1) {

      let i = 0;
      this.listadoEstudianteMatriculas.forEach(elementE => {

        this.VnotasExcel.forEach(element => {

          let estudiante = elementE.ESTUDIANTE.APELLIDO_ESTUDIANTE.trim() + ' ' + elementE.ESTUDIANTE.NOMBRE_ESTUDIANTE.trim();
          let notaEstudiante = element.APELLIDO_ESTUDIANTE.trim() + ' ' + element.NOMBRE_ESTUDIANTE.trim();


          if (element != null) {

            if (estudiante.trim() == notaEstudiante.trim()) {

              console.log("elementoE", estudiante, "elemento", notaEstudiante)
              this.object[i].insumo1 = element.INSUMO1;
              this.object[i].insumo2 = element.INSUMO2;
              this.object[i].insumo3 = element.INSUMO3;
              this.object[i].insumo4 = element.INSUMO4;
              this.object[i].insumo5 = element.INSUMO5;
              this.object[i].insumo6 = element.INSUMO6;
              this.object[i].insumo7 = element.INSUMO7;
              this.object[i].insumo8 = element.INSUMO8;
              this.object[i].examen1 = element.EXAMEN1;

              this.object[i].insumo11 = element.INSUMO11;
              this.object[i].insumo22 = element.INSUMO22;
              this.object[i].insumo33 = element.INSUMO33;
              this.object[i].insumo44 = element.INSUMO44;
              this.object[i].insumo55 = element.INSUMO55;
              this.object[i].insumo66 = element.INSUMO66;
              this.object[i].insumo77 = element.INSUMO77;
              this.object[i].insumo88 = element.INSUMO88;

              this.object[i].examen2 = element.EXAMEN2;
              this.object[i].examenSupletorio = element.EXAMENSUPLETORIO;
              this.object[i].examenRemedial = element.EXAMENREMEDIAL;
              this.object[i].examenGracia = element.EXAMENGRACIA;
            }
          }
        });
        i++;
      });
    } else if (variable == 2) {

      let i = 0;


      for (let elementE of this.listadoEstudianteMatriculas) {
        for (let element of this.VnotasExcel) {

          let estudiante = elementE.ESTUDIANTE.APELLIDO_ESTUDIANTE.trim() + ' ' + elementE.ESTUDIANTE.NOMBRE_ESTUDIANTE.trim();
          let notaEstudiante = element.APELLIDO_ESTUDIANTE.trim() + ' ' + element.NOMBRE_ESTUDIANTE.trim();
          debugger 

          if (element != null) {

            if (estudiante.trim() == notaEstudiante.trim()) {
              this.objectB[i].Q1P1insumo1 = element.Q1P1INSUMO1;
              this.objectB[i].Q1P1insumo2 = element.Q1P1INSUMO2;
              this.objectB[i].Q1P1insumo3 = element.Q1P1INSUMO3;
              this.objectB[i].Q1P1insumo4 = element.Q1P1INSUMO4;
              this.objectB[i].Q1P1insumo5 = element.Q1P1INSUMO5;
              this.objectB[i].Q1P1insumo6 = element.Q1P1INSUMO6;

              this.objectB[i].Q1P2insumo1 = element.Q1P2INSUMO1;
              this.objectB[i].Q1P2insumo2 = element.Q1P2INSUMO2;
              this.objectB[i].Q1P2insumo3 = element.Q1P2INSUMO3;
              this.objectB[i].Q1P2insumo4 = element.Q1P2INSUMO4;
              this.objectB[i].Q1P2insumo5 = element.Q1P2INSUMO5;
              this.objectB[i].Q1P2insumo6 = element.Q1P2INSUMO6;

              this.objectB[i].Q1P3insumo1 = element.Q1P3INSUMO1;
              this.objectB[i].Q1P3insumo2 = element.Q1P3INSUMO2;
              this.objectB[i].Q1P3insumo3 = element.Q1P3INSUMO3;
              this.objectB[i].Q1P3insumo4 = element.Q1P3INSUMO4;
              this.objectB[i].Q1P3insumo5 = element.Q1P3INSUMO5;
              this.objectB[i].Q1P3insumo6 = element.Q1P3INSUMO6;


              this.objectB[i].examen1 = element.EXAMEN1;

              this.objectB[i].Q2P1insumo1 = element.Q2P1INSUMO1;
              this.objectB[i].Q2P1insumo2 = element.Q2P1INSUMO2;
              this.objectB[i].Q2P1insumo3 = element.Q2P1INSUMO3;
              this.objectB[i].Q2P1insumo4 = element.Q2P1INSUMO4;
              this.objectB[i].Q2P1insumo5 = element.Q2P1INSUMO5;
              this.objectB[i].Q2P1insumo6 = element.Q2P1INSUMO6;
              
             this.objectB[i].Q2P2insumo1 = element.Q2P2INSUMO1;
              this.objectB[i].Q2P2insumo2 = element.Q2P2INSUMO2;
              this.objectB[i].Q2P2insumo3 = element.Q2P2INSUMO3;
              this.objectB[i].Q2P2insumo4 = element.Q2P2INSUMO4;
              this.objectB[i].Q2P2insumo5 = element.Q2P2INSUMO5;
              this.objectB[i].Q2P2insumo6 = element.Q2P2INSUMO6;

              this.objectB[i].Q2P3insumo1 = element.Q2P3INSUMO1;
              this.objectB[i].Q2P3insumo2 = element.Q2P3INSUMO2;
              this.objectB[i].Q2P3insumo3 = element.Q2P3INSUMO3;
              this.objectB[i].Q2P3insumo4 = element.Q2P3INSUMO4;
              this.objectB[i].Q2P3insumo5 = element.Q2P3INSUMO5;
              this.objectB[i].Q2P3insumo6 = element.Q2P3INSUMO6;

              this.objectB[i].examen2 = element.EXAMEN2;
              this.objectB[i].examenSupletorio = element.EXAMENSUPLETORIO;
              this.objectB[i].examenRemedial = element.EXAMENREMEDIAL;
              this.objectB[i].examenGracia = element.EXAMENGRACIA;



            }
          }
        }
        i++;
      };



    } else if (variable == 3) {
      let i = 0;

      this.listadoEstudianteMatriculas.forEach(elementE => {

        this.VnotasExcel.forEach(element => {

          let estudiante = elementE.ESTUDIANTE.APELLIDO_ESTUDIANTE.trim() + ' ' + elementE.ESTUDIANTE.NOMBRE_ESTUDIANTE.trim();
          let notaEstudiante = element.APELLIDO_ESTUDIANTE.trim() + ' ' + element.NOMBRE_ESTUDIANTE.trim();


          if (element != null) {

            if (estudiante.trim() == notaEstudiante.trim()) {
              this.objectC[i].Puforo = element.PUFORO;
              this.objectC[i].Putarea1 = element.PUTAREA1;
              this.objectC[i].Putarea2 = element.PUTAREA2;
              this.objectC[i].Putarea3 = element.PUTAREA3;
              this.objectC[i].Putarea4 = element.PUTAREA4;
              this.objectC[i].Puexamen = element.PUEXAMEN;

              this.objectC[i].Suforo = element.SUFORO;
              this.objectC[i].Sutarea1 = element.SUTAREA1;
              this.objectC[i].Sutarea2 = element.SUTAREA2;
              this.objectC[i].Sutarea3 = element.SUTAREA3;
              this.objectC[i].Sutarea4 = element.SUTAREA4;
              this.objectC[i].Suexamen = element.SUEXAMEN;

              this.objectC[i].Tuforo = element.TUFORO;
              this.objectC[i].Tutarea1 = element.TUTAREA1;
              this.objectC[i].Tutarea2 = element.TUTAREA2;
              this.objectC[i].Tutarea3 = element.TUTAREA3;
              this.objectC[i].Tutarea4 = element.TUTAREA4;
              this.objectC[i].Tuexamen = element.TUEXAMEN;


              this.objectC[i].Cuforo = element.CUFORO;
              this.objectC[i].Cutarea1 = element.CUTAREA1;
              this.objectC[i].Cutarea2 = element.CUTAREA2;
              this.objectC[i].Cutarea3 = element.CUTAREA3;
              this.objectC[i].Cutarea4 = element.CUTAREA4;
              this.objectC[i].Cuexamen = element.CUEXAMEN;

              this.objectC[i].Quforo = element.QUFORO;
              this.objectC[i].Qutarea1 = element.QUTAREA1;
              this.objectC[i].Qutarea2 = element.QUTAREA2;
              this.objectC[i].Qutarea3 = element.QUTAREA3;
              this.objectC[i].Qutarea4 = element.QUTAREA4;
              this.objectC[i].Quexamen = element.QUEXAMEN;

              this.objectC[i].examenFinal = element.EXAMENFINAL;
              this.objectC[i].examenSupletorio = element.EXAMENSUPLETORIO;
              this.objectC[i].examenRemedial = element.EXAMENREMEDIAL;
              this.objectC[i].examenGracia = element.EXAMENGRACIA;




            }
          }
        });
        i++;
      });
    }
    this.loading = false;

  }

  recargar() {
    location.reload();
  }

}
