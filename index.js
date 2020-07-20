/*

Dev Challenge - ClassApp
Autor: Leandro Marcondes

*/

// criação do objeto tabela.
var tabela = 
{[

  //Dados referentes ao John Doe 1 ------------------------------------------------------

	johnD = 
	{
	  "fullname": "John Doe 1", //A string "John Doe 1" é o valor atribuido à propriedade "fullname" do objeto johnD.
	  "eid": "1234",
	  "classes": 
	  [
	    "Sala 1", //Posição 0 do vetor "classes".
	    "Sala 2", //Posição 1 do vetor "classes".
	    "Sala 3", //Posição 2 do vetor "classes".
	    "Sala 4", //Posição 3 do vetor "classes".
	    "Sala 5", //Posição 4 do vetor "classes".
	    "Sala 6"  //Posição 5 do vetor "classes".
	   ],
	   "addresses": [{
	 	  phone1John: {
		    type: "phone", tags: ["Responsável", "Mãe"], address: "551138839332" 
		  }, //phone1John é um objeto com três objetos aninhados, sendo tags um vetor com duas posições.

		  emailMaeJohn: {
		    type: "email", tags: "Mãe", address: "johndoemae1@gmail.com"
		  }, //emailMaeJohn é um objeto com três objetos aninhados.

		  emailAlunoJohn: {
		    type: "email", tags: "Aluno", address: "johndoealuno1@gmail.com"
		  }, //emailAlunoJohn é um objeto com três objetos aninhados.

		  emailPaiJohn: {
		    type: "email", tags: ["Responsável", "Pai"], address: ["johndoepai2@gmail.com", "johndoepai3@gmail.com"] 
		  }, //emailPaiJohn é um objeto com três objetos aninhados, sendo tags um vetor de duas posições e address um vetor de três posições.

		  phonePaiJohn: {
		    type: "phone", tags: "Pai", address: "5519985504400"
		  }, //phonePaiJohn é um objeto com três objetos aninhados.

		  phoneMaeJohn: {
		    type: "phone", tags: ["Responsável", "Mãe"], address: "551138839333"
		  }  //phoneMaeJohn é um objeto com três objetos aninhados, sendo tags um vetor com duas posições.
	   }], 
	  		  // A propriedade addresses é um vetor de 7 posições com objetos e vetores aninhados.
	  "invisible": true,
	  "see_all": true //"invisible" e "see_all" são propriedades booleanas cujos valores são verdadeiros
   }


  //Dados referentes a Mary Doe 2 ------------------------------------------------------

	maryD = {
	  "fullname": "Mary Doe 2", //A string "Mary Doe 2" é o valor atribuido à propriedade "fullname" do objeto maryD.
	  "eid": "1235",
	  "classes": "Sala 1",
	  "addresses": [{
	    type: "email", tags: ["Responsável", "Pai"], address: "marydoe1@gmail.com"
	  }],
	      //a propriedade adressess é um vetor cujos valores são três objetos aninhados, sendo tags um vetor com duas posições.
	  "invisible": false,
	  "see_all": false //"invisible" e "see_all" são propriedades booleanas cujos valores são falsos
	}

  //Dados referentes ao Victor Doe 3 ------------------------------------------------------

	if victorD = 10:
		victorD = {
		  "fullname": "Victor Doe 3", //A string "Victor Doe 3" é o valor atribuido à propriedade "fullname" do objeto victorD.
		  "eid": "1236",
		  "classes": ["Sala 6", "Sala 7"],
		  "addresses": [{ 
		    type: "email" , tags: ["Responsável", "Pai"], address: "victordoepai1@hotmail.com"
		  }, //a propriedade adressess é um vetor cujos valores são três objetos aninhados, sendo tags um vetor com duas posições.

		  emailMaeVictor: {
		    type: "email", tags: ["Mãe", "Aluno"], address: "victordoe3@gmail.com"
		}, //emaileMaeVictor é um objeto com três objetos aninhados, sendo tags um vetor com duas posições.

		  phoneMaeVictor{
		    type: "phone", tags: "Aluno", address: "551974430033"
		   }], //phoneMaeVictor é um objeto com três objetos aninhados.

		  "invisible": false,
		  "see_all": false //"invisible" e "see_all" são propriedades booleanas cujos valores são falsos
		}
	]}

export default tabela //Exportando o objeto tabela
