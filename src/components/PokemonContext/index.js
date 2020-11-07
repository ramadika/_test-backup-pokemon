import {createContext, Component} from "react"; 

export const PokemonContext = createContext();

class PokemonContextProvider extends Component {
    state = { 
        allPokes : [],
        total: 0,
        initialURL: "https://pokeapi.co/api/v2/pokemon/",
        isLoaded: false,
    }

    handleDelete = id => {
        if(window.confirm("Do you want to delete this pokemon?")){
            const allPokes = this.state.allPokes.filter(c => c.id !== id);
            this.setState({allPokes: allPokes});
            const allPokesLength = this.state.allPokes.length;
            const ownedTotal = allPokesLength - 1;
            this.setState({total : ownedTotal});
        }
    }

    handleAdd = (nickName, thePoke) => {
        const {allPokes} = this.state;
        const allPokesLength = allPokes.length;
        const ID = Math.random().toString(36).substr(2,9);
        const data = [{
            id: ID,
            nickName: nickName,
            thePoke: thePoke,
        }]
        this.setState({allPokes: [...allPokes,...data]})
        const ownedTotal = allPokesLength + 1;
        this.setState({total: ownedTotal})
        alert('Successfully Added');
    }

    componentDidUpdate(){
        localStorage.setItem('dataPokemon', JSON.stringify(this.state.allPokes))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataPokemon'));
        if(dataCart !== null){
            this.setState({allPokes: dataCart});
        }
        const ownedTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(ownedTotal !== null){
            this.setState({total: ownedTotal});
        }
    }
    
    render() { 
        const {allPokes, total, initialURL, isLoaded} = this.state;
        const {handleDelete, handleAdd} = this;

        return ( 
            <PokemonContext.Provider value={{total, initialURL, isLoaded, allPokes, handleDelete, handleAdd}}>
                {this.props.children}
            </PokemonContext.Provider>
         );
    }
}
 
export default PokemonContextProvider;