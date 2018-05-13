// !! FAIT EN ÉQUIPE AVEC SANDRINE !!


var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};


/*
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
*/	
	 
function main(){
   
//Je veux insérer img dans la div id holder. Pour cela: la méthode .append()
   $("#holder").append($("<img>"));
   
/*
Je veux que quand on "click" sur les boutons de class ui button (pour cela: .on("click") ça s'associe à ma fonction pour obtenir la valeur de l'attribut
*/
    $(".ui button").on("click", function() {
        var animal= $(this).attr("data-animal");
        console.log(animal); 
        
//Je veux que la var species s'associe aux contenu du dossier img => penser au / aprés img pour pointer la direction!!!
        var image= "img/" + species[animal];
        console.log(species[animal]);
        console.log(image);
        
//Je veux les attributs de "img" => .attr()      
    $("img").attr("src", image);       
        
 })
}

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	
$(document).ready(function(){
	main();
});