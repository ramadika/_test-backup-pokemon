import {createContext, Component} from "react";

export const PokemonContext = createContext();

class PokemonContextProvider extends Component {
    state = { 
        allPokes : [], 
    }

    handleDelete = id => {
        if(window.confirm("Do you want to delete this pokemon?")){
            const allPokes = this.state.allPokes.filter(c => c.id !== id);
            this.setState({allPokes: allPokes});
        }
    }
    
    addItem = (nickName, thePoke) => {
        const {allPokes} = this.state;
        const data = [{
            id: allPokes.length + 1,
            nickName: nickName,
            thePoke: thePoke,
        }]
        this.setState({allPokes: [...allPokes,...data]})
    }

    componentDidUpdate(){
        localStorage.setItem('dataPokemon', JSON.stringify(this.state.allPokes))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataPokemon'));
        if(dataCart !== null){
            this.setState({allPokes: dataCart});
        }
    }
    
    render() { 
        const {allPokes} = this.state;
        const {handleDelete, addItem} = this;

        return ( 
            <PokemonContext.Provider value={{allPokes, handleDelete, addItem}}>
                {this.props.children}
            </PokemonContext.Provider>
         );
    }
}
 
export default PokemonContextProvider;