import React, { Component } from 'react'

export default class ShowModalDataPortafolio extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    // console.log(this.props.numero)

    return (

      <div>
        {/* Button trigger modal */}
        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modaluno">
              Launch demo modal
            </button> */}


        {/* Central Modal Small */}
        {/* {console.log(`modal${this.props.numero}`)} */}

        <div className="modal fade  " id={`modal${this.props.numero}`} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
          {/* Change class .modal-sm to change the size of the modal */}
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content" >
              <div className="modal-header modal-content-title">
                <h4 className="modal-title w-100 text-left pl-4 h4-responsive font-weight-bold" id="myModalLabel">{this.props.objectProtect.title}</h4>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* {this.props.objectProtect.title} <br/>
                    {this.props.objectProtect.description}  <br/>
                    {this.props.objectProtect.numero} <br/> */}



                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-6">
                      {/*Carousel Wrapper*/}
                      <div id="carousel-thumb" className=" carousel-fade carousel-thumbnails" data-ride="carousel">

                        {/* indicator */}

                        {/* indicaatro */}

                        {/*Slides*/}
                        <div className="example z-depth-5 text-center" role="listbox">
                          <div className="carousel-item active example  z-depth-3  ">
                            <img className="d-block w-100 " src={this.props.objectProtect.url} alt="First slide" />
                          </div>

                        </div>

                        {/*/.Slides*/}

                      </div>

                      {/*/.Carousel Wrapper*/}
                    </div>
                    <div className="col-lg-6 example informacion-detalle">
                      <h4 className="h4-responsive product-name text-left text-primary pt-5">
                        <strong>Descripción del proyecto:</strong>
                      </h4>
                      {/* <h4 className="h4-responsive">
              <span className="green-text">
                <strong>$49</strong>
              </span>
              <span className="grey-text">
                <small>
                  <s>$89</s>
                </small>
              </span>
            </h4> */}
                      {/*Accordion wrapper*/}
                      <div className="accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                        {/* Accordion card */}
                        <div className="pb-2 mb-3">

                          {/* Card body --> description*/}
                          <div id="collapseOne1" role="tabpanel" aria-labelledby="headingOne1" >
                            <div className="card-body text-left pt-2">
                              {this.props.objectProtect.description}
                              {/* HIRE DESCRIPTION */}
                            </div>
                          </div>
                        </div>
                        {/* Accordion */}

                        <h3 className="h3-responsive text-left text-primary">
                          <strong>Herramientas utilizadas:</strong>
                        </h3>
                        <div className="">
                          <div className="card-body text-left text-dark h6">
                            {this.props.objectProtect.herramientas}
                            {/* HIRE HERRAMIENTAS  */}
                          </div>
                        </div>

                        <h5 className="h6-responsive text-left text-primary">
                          <strong>URL disponible:</strong>
                        </h5>
                        <div className=" pb-3">
                          <div className="card-body text-left text-dark h6">
                            <a href={this.props.objectProtect.url_del_sitio}>

                              <i class="far fa-hand-point-right pr-2"></i>
                    Visitar sitio
                    {/* HIRE HERRAMIENTAS  */}
                            </a>
                          </div>
                        </div>



                      </div>
                      {/* Accordion wrapper */}

                      {/* /.Add to Cart */}
                    </div>
                  </div>
                </div>




              </div>
              {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary btn-sm">Save changes</button>
                  </div> */}
            </div>
          </div>
        </div>
        {/* Central Modal Small */}
      </div>
    )
  }
}