/**
 * Created by JCG-003 on 14/12/2015.
 */
angular.module('rw')
    .controller('IndexController5', IndexController5);

function IndexController5($scope){
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.gridOptions = {};

    function iniciar() {
        $scope.gridOptions.data='listaDePessoas';
    }

    function salvar() {
        $scope.listaDePessoas.push($scope.entidade);
        limpar();
    }

    function limpar() {
        $scope.entidade = {};
    }

    function excluir() {

    }
};