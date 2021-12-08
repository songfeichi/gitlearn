var id=0
function nextId(){
	id++;
	return 'p'+id;
}
function todo(name, description , memo) {
    this.id = nextId();
    this.name = name;
    this.description = description;
    this.memo = memo;
}

var todos = [
    {
        id: nextId(),
        name: 'Learn Git',
        description: 'Learn how to use git as distributed version control'
    },
    {
        id: nextId(),
        name: 'Learn JavaScript',
        description: 'Learn JavaScript, Node.js, NPM and other libraries'
    },
    {
        id: nextId(),
        name: 'Learn Python',
        description: 'Learn Python, WSGI, asyncio and NumPy'
    },
    {
        id: nextId(),
        name: 'Learn Java',
        description: 'Learn Java, Servlet, Maven and Spring'
    }
];

module.exports={
	gettodos:()=>{
		return todos;
	},
	gettodo:(id)=>{
		var i;
		for(i=0;i<todos.length;i++){
			if(todos[i]===id){
				return todos[i];
			}
		}
		return null;
	},
	createtodo:(name,description,memo)=>{
		var p=new todo(name,description,memo)
		todos.push(p)
		return p;
	},
	deletetodo:(id)=>{
		var index=-1,i;
		for(i=0;i<todos.length;i++){
			if(todos[i].id===id){
				index=i;
				break;
			}
		}
		if(index>=0){
			return todos.splice(index,1)[0];
		}
		return null;
	},
	modifytodo:(id,name,description)=>{
		var index=-1,i;
		for(i=0;i<todos.length;i++){
			if(todos[i].id===id){
				index=i;
				break;
			}
		}
		if(index>=0){
			todos[index].name=name;
			todos[index].description=description;
			// todos[id].memo=memo;
			return todos[index];
		}
		return null;
	}
}