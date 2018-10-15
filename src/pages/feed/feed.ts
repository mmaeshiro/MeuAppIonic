import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public obj_feed = {
    titulo: "Michael Maeshiro",
    data: "maio 23, 2018",
    descricao: "Estou criando um app incrivel...",
    qntd_likes: 12,
    qntd_comentario: 4,
    time_comentario: "11 ago"
  }

  public lista_filmes = Array<any>();
  public page = 1;
  public infiniteScroll;

  //variavel
  public nome_usuario: string = "Michael Maeshiro do codigo";

  //função
  public somar(num1: number, num2: number): void {
    // alert('Resultado da soma: ' + (num1 + num2) );
  }

  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvader: MovieProvider,
    public loadingCtrl: LoadingController
  ) { }

  abrirCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
    });
    this.loader.present();
  }

  fechararregando() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();

  }

  //ler a pagina
  ionViewDidEnter() {
    // this.somar(10, 10);
    this.carregarFilmes();
  }

  //scroll infinito
  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);

  }

  carregarFilmes(newpage: boolean = false) {

    this.abrirCarregando();
    this.movieProvader.getLastMovies(this.page).subscribe(
      data => {
        const response = (data as any);

        if (newpage) {
          this.lista_filmes = this.lista_filmes.concat(response.results);
          this.infiniteScroll.complete();
        } else {
          this.lista_filmes = response.results;
        }

        this.fechararregando();

        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }

      },
      error => {
        this.fechararregando();

        if (this.isRefreshing) {
          this.refresher.Complete();
          this.isRefreshing = false;
        }

        console.log(error);
      }
    )

  }

  abrirDetalhes(filme) {
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id });
  }

}
