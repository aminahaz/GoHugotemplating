var ar = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0],
    [0,0,1,3,3,3,3,1,0,1,3,3,3,2,1,0,0],
    [0,0,3,3,0,0,3,3,1,3,3,3,3,3,2,1,0],
    [0,3,0,0,3,0,3,3,3,3,3,3,3,3,2,1,0],
    [0,0,0,3,0,3,0,3,3,3,3,3,3,3,2,1,0],
    [0,0,3,0,3,0,3,0,3,3,3,3,3,3,2,1,0],
    [0,0,0,3,3,0,0,3,0,3,3,3,3,3,2,1,0],
    [0,0,3,0,0,0,0,0,3,3,3,3,3,2,1,0,0],
    [0,0,0,0,0,3,0,3,0,0,3,3,2,1,0,0,0],
    [0,0,0,0,0,0,3,0,0,3,3,2,1,0,0,0,0],
    [0,0,0,0,0,0,0,3,0,3,2,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,3,3,2,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   
]
for (var a = 0; a < ar.length; a++) {
        for (var b = 0; b < ar[a].length; b++) {
            var newDiv = document.createElement("div");
            if (ar[a][b] == 1) {
                newDiv.className = "black"; //Geeft nummer 1 een zwarte kleur in de grid 
            } 
            if (ar[a][b] == 2)  {
                newDiv.className = "red"; //Geeft nummer 2 een rode kleur in de grid 
            }
            if (ar[a][b] == 3)  {
                newDiv.className = "pink";  //Geeft nummer 3 een roze kleur in de grid 
            }
            document.getElementById("container").appendChild(newDiv); 
        }
    }


