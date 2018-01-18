import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption:undefined
    };


    handleModalState=()=>{
        this.setState(()=>({
            selectedOption:false
        }));
    }
    handleDeleteOptions = () => {
        this.setState(() => ({options:[]}));
    };


    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>{
            return{
                options:prevState.options.filter((option)=>{
                    return optionToRemove!==option;
                })
            };
        });
    };

    handlePick = () => {
        const randomValue = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomValue];
       
        this.setState(()=>({
            selectedOption:randomOption
        }));
       
        this.setState((prevState) =>{
            return{
                options:prevState.options.filter((option)=>{
                    return randomOption!==option;
                })
            };
        });
    };


    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)>-1){
            return 'This option already exists';
        }else{

            this.setState((prevState)=>{
                
                return{
                    options: prevState.options.concat([option])
                };
            });
        }



    };
    



    componentDidMount(){
        try{

            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({ options }));
            }
        }catch (e){
            //Do nothing at all
        }
        
        
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            console.log('saving data');
            localStorage.setItem('options',json);

        }
    };

    componentWillUnmount(){
        console.log('component will unmount');
    };



    render(){
        
        const subtitle = "Put your Life in the hands of a computer";
        
        return(
            <div>
        
                <Header subtitle = {subtitle}/>
                <div className="container">

                    <Action 
                            hasOptions={this.state.options.length>0}
                            handlePick = {this.handlePick}
                            />
                    <div className="widget">

                        <Options 
                            options = {this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption = {this.handleAddOption}/>

                    </div>
                </div>
                <OptionModal 
                        selectedOption={this.state.selectedOption}
                        handleModalState={this.handleModalState}
                        />
                </div>
        )
    };
}





