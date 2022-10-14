import React from "react";
import {
  Label,
  TextBox,
  Form,
  ComboBox,
  DataGrid,
  GridColumn,
  LinkButton,
  ButtonGroup,
  NumberBox,
} from "rc-easyui";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      model: {
        name: "",
        age: "",
        status: "",
      },

      statusData: [
        { value: "active", text: "Active" },
        { value: "Inactive", text: "InActive" },
      ],
      data: [],
      operation: "add",
      // errors:{},
      title: "",
      closed: "",
      update: "",
      show: false,
      options: [
        { value: "All", text: "All" },
        { value: "Active", text: "Active" },
        { value: "InActive", text: "InActive" }
      ]
    };
  }
  handleChange(field, value) {
    let model = Object.assign({}, this.state.model);
    model[field] = value;
    this.setState({ model: model });
  }
  //updating
  handleEdit = (row) => {
    this.setState({
      operation: "Update",
      model: row,
    });
  };

  handleRow = () => {
    let data = this.state.model.find(
      () => (this.state.id = this.state.model.id)
    );
    this.setState(data);
  };
  //submit
  handleSubmit = () => {
    console.log("inside handlesubmit")
    let data = this.state.data;
    this.setState(
      {
        data: [...data, { ...this.state.model, id: Math.random() }],
      },//spread operator
      () => {
        this.setState({
          model: {
            name: "",
            age: "",
            status: "",
          },
        });
      }
    );
  };

  //update
  handleUpdate = () => {
    const data = this.state.data
    data.map((d) => {
      if (
        d.id == this.state.model.id
      ) {

        d.name = this.state.model.name
        d.age = this.state.model.age
        d.status = this.state.model.status
      }
    }
    )
    this.setState({
      data: data

    }, () => {
      this.setState({
        model: {
          name: "",
          age: "",
          status: "",
        },
        operation: "add"
      });
    }
    )
  }

  handleDelete() {
    console.log("delete")
    let data = this.setState.data(() => {
      return this.state.model(() => {
        return this.state.model();
      })
    })
  }

  render() {
    const { name, age, status } = this.state.model; //dstracture
    return (
      <>
        <div>
          <h2>Form</h2>
          <Form model={this.state.model} onChange={this.handleChange.bind(this)}>
            <div className="f-row" style={{ width: "25em" }}>
              <div className="f-full">
                <Label htmlFor="t1" align="top">
                  Name
                </Label>
                <TextBox
                  placeholder="Name"
                  value={name}
                  name="name"
                  style={{ width: "100%" }}
                ></TextBox>
              </div>
            </div>
            <div className="f-row" style={{ width: "25em" }}>
              <div className="f-full">
                <Label htmlFor="t2" align="top">
                  Age
                </Label>
                <NumberBox
                  inputId="t2"
                  placeholder="Age"
                  name="age"
                  value={age}
                  style={{ width: "100%" }}
                ></NumberBox>
              </div>
            </div>
            <div>
              <Label htmlFor="c1" align="top">
                status
              </Label>
              <ComboBox
                data={this.state.statusData}
                value={this.state.model.status}
                name="status"
              />
            </div>

            <button type="button"
              onClick={this.state.operation == "add" ? this.handleSubmit : this.handleUpdate}

            >
              {this.state.operation == "add" ? "Submit" : "Update"}
            </button>
            <div style={{ marginBottom: 20 }} align="center">
              <Label htmlFor="c1" align="center">Status: </Label>
              <ComboBox inputId="c1" style={{ width: 120 }} align="center"
                data={this.state.options}
                editable={false}
                value={this.state.pagePosition}
                onChange={(value) => this.setState({ pagePosition: value })}
              />
            </div>
            <div>
              <h2>Basic DataGrid</h2>
              <DataGrid data={this.state.data} style={{ height: 250 }}>
                <GridColumn field="id" title="ID"></GridColumn>
                <GridColumn field="name" title="Name"></GridColumn>
                <GridColumn field="age" title="Age" align="right"></GridColumn>
                <GridColumn
                  field="status"
                  title="Status"
                  align="center"
                >

                </GridColumn>
                <GridColumn
                  field="act"
                  title="Actions"
                  align="center"
                  width={110}
                  render={({ row }) => (
                    <div>
                      <ButtonGroup>
                        <LinkButton onClick={() => this.handleEdit(row)}>
                          Edit
                        </LinkButton>
                        <LinkButton onClick={() => this.handledelete(row)}>
                          Delete
                        </LinkButton>
                      </ButtonGroup>
                    </div>
                  )}
                />
              </DataGrid>
            </div>
          </Form>
        </div >
      </>
    );
  }
}

export default Main;
