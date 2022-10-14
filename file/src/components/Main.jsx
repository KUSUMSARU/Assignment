import React from 'react';
import { Label, TextBox, Form,ComboBox, NumberBox,LinkButton,DataGrid,GridColumn,ButtonGroup } from 'rc-easyui';
 
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      model: {
        name: '',
        age: '',
      },
      statusData: [{ value: "active", text: "Active" },
      { value: "Inactive", text: "InActive" }],
    }
    this.state={
      update:{
      name :"",
      age :"",
      }
      
    }
  }
  handleChange(field,value){
    let model = Object.assign({}, this.state.model);
    update:[...editfromdatsa]
    model[field] = value;
    this.setState({model:{
      update:{
        name:'',
        age:'',

      }
    }});

  }
  handleSubmit = () => {
    data: [...data, this.state.model ]
    let data = this.state.data
    this.setState({

    },()=>{
      this.setState({
        model:{
          name: '',
          age: '',
          status: '',
        }
      },


      )
    })
  }
  render() {
    const {name,age} = this.state.model;
    return (
      <><div>
        <h2>Basic TextBox</h2>
        <Form model={this.state.model} onChange={this.handleChange.bind(this)}>
          <div style={{ width: '35em' }}>
            <div>
              <Label htmlFor="t3" align="top"> Name:</Label>
              <TextBox inputId="t3" placeholder="name" name="name" value={name} style={{ width: '100%' }}></TextBox>
            </div>
            <div>
              <Label htmlFor="t4" align="top">Age:</Label>
              <NumberBox inputId="t4" placeholder="Age" name="company" value={age} style={{ width: '100px' }}></NumberBox>
            </div>
            <div>
              <Label htmlFor="c1" align="top">status</Label>
              <ComboBox
                data={this.state.statusData}
                value={this.state.model.status}
                name='status'
                handleChange={this.handleChange} />
            </div>
            <LinkButton onClick={this.handleSubmit}>Submit</LinkButton>
          </div>
        </Form>
      </div><div><h2>Dialog Editing</h2><DataGrid data={this.state.data} style={{ height: 250 }}>
          <GridColumn field="Name" title="Name"></GridColumn>
          <GridColumn field="Age" title="Age"></GridColumn>
          <GridColumn field="status" title="Status" align="center"></GridColumn>
          <GridColumn field="act" title="Actions" align="center" width={110}
            render={({ row }) => (
              <div>
                <ButtonGroup>
                  <LinkButton onClick={() => this.editRow(row)}>Edit</LinkButton>
                  <LinkButton onClick={() => this.deleteRow(row)}>Delete</LinkButton>
                </ButtonGroup>
              </div>
            )} />
        </DataGrid>
     </div>
     </>
    
    );
  }
}
 
export default App;