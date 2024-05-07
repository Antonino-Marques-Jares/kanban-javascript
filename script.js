* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins';
  font-size: 12px;
}

.kanban {
  display: flex;
  justify-content: center;
  min-height: 400px;
  gap: 10px;
  padding: 10px;
  background: #FFF4CF;
}

.grupo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: rgb(95, 160, 109);
  min-width: 200px;
  border-radius: 5px;
  height:auto;
  margin: 20px 20px 20px 20px;
  padding: 10px 10px 10px 10px;
}

.item {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}

.dragging {
  opacity: 0.5;
}

#nome-novo-grupo{
  width:100px;
  height:30px;
  margin: 20px 0px 0px 150px;
}

#add-grupo{
  width:100px;
  height:30px;
  margin: 20px 0px 0px 0px;
}

#nome-novo-item{
  width:100px;
  height:30px;
  margin: 20px 0px 0px 150px;
}
#add-item{
  width:100px;
  height:30px;
  margin: 20px 0px 0px 0px;
}

/* CSS Styling (example) */
.context-menu {
  position: absolute;
  display: none; /* Escondido inicialmente */
  background: #fff;
  border: 1px solid #ccc;
  padding: 5px;
}

.context-menu ul {
  list-style: none;
  padding: 0;
}

.context-menu li {
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.context-menu li:hover {
  background-color: #f0f0f0;
}

#formulario{
  margin: 50px 50px 50px 50px;
  background: #666666;
  width: 50%;
  display: table;
}
