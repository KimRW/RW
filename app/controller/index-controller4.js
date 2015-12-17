/**
 * Created by JCG-003 on 14/12/2015.
 */
angular.module('rw')
    .controller('IndexController4', IndexController4);

function IndexController4($scope){
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

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