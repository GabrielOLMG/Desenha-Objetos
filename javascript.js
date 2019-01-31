class Ponto {
	contructor(){
          	this.xi = null;
          	this.yi = null;
          	this.xf = null;
          	this.yf = null;
	}
}

class Figura {
	constructor(){
		this.pontos = [];
		this.tipo = null;
		this.b = true;
	}
	addPonto(){
		this.pontos.push(new Ponto());
	}
	atualizar(){
		this.pontos=[];
		if(this.tipo == "Poligono"){
			this.b= false;
			return;
		}	
		this.b=true;
		if(this.tipo == "Linha"){
			this.pontos.push(new Ponto());
			
		}else if(this.tipo == "Circulo"){
			this.pontos.push(new Ponto());
		}	
	}     	 
}

var pag = angular.module('pag', []);
pag.controller('botao',function($scope){
	$scope.name = ["Linha","Circulo", "Poligono"];
	$scope.bu = false;
	$scope.figuras=[];
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	$scope.retas = function(xi,yi,xf,yf,tipo){
		ctx.beginPath();
		if(tipo == "Linha"||tipo == "Poligono"){
          		ctx.moveTo(xi, yi);
          		ctx.lineTo(xf, yf);
          		ctx.stroke();
		}else if(tipo == "Circulo"){
			var raio = Math.sqrt((xf-xi)*(xf-xi) + (yf-yi)*(yf-yi))
			ctx.arc(xi,yi,raio,0,2*Math.PI);
			ctx.stroke();
		}
        } 
	$scope.PrintaPonto = function(){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			$scope.y = $scope.figuras.length;
			var n = 0;
			var p = 0;
			while(n < $scope.figuras.length){
				while(p < $scope.figuras[n].pontos.length){
					$scope.retas($scope.figuras[n].pontos[p].xi,$scope.figuras[n].pontos[p].yi,$scope.figuras[n].pontos[p].xf,$scope.figuras[n].pontos[p].yf,$scope.figuras[n].tipo);
					p++;
				}
				p = 0;
				n++;
			}
	}
	$scope.CriarFigura = function(){
		var f1 = new Figura();	
		$scope.figuras.push(f1);
	}
});
	
	
