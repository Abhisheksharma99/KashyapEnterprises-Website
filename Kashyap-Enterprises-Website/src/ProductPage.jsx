import { useState , useEffect} from "react"
import { Link } from "react-router-dom"
import productimg from "./images/50-ltr-rocket-can-500x500.jpg"
import Type from "./Type";
const ProductPage = () => {
let value = "test"
const [display] = useState(false);
const allbtn = document.querySelectorAll('.productbtn');
const [btninfo, setbtninfo] = useState();
    console.log(btninfo);
    var currid = 'abc'
    const handleClick = (e) =>{
        var currid = e.target.id
        console.log(currid)
        setbtninfo(currid)
        console.log(btninfo,"btninfo")
    }
    useEffect(() => {
     setbtninfo(currid)
    }, []);
    
    return (
        <>
        <div className="mt-5">
            <Type/>
            <h1 id="defoamers" className="productheading border-bottom text-center mb-5 fw-bolder">Defoamers</h1>
            <div className="container d-flex justify-content-center mt-50 mb-50">
                <div className="row">
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST AF ECO - Economy Silicone Defoamer/Antifoam
</a> </h6> <a href="" className="text-muted" data-abc="true">Defoamers</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF 715 - 15% Silicone Defoamer/Antifoam
</a> </h6> <a href="#" className="text-muted" data-abc="true">Defoamer & Antifoams</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF 720 - 20% Silicone Defoamer/Antifoam</a> </h6> <a href="#" className="text-muted" data-abc="true">Defoamers & Antifoams</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF 730 - 30% Silicone Defoamer/Antifoam
</a> </h6> <a href="#" className="text-muted" data-abc="true">Defoamers & Antifoams</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF 740 - 40% Silicone Defoamer/Antifoam <br/><br/>
</a> </h6> <a href="#" className="text-muted" data-abc="true">Defoamers & Antifoams</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF 750 - 50% Silicone Defoamer/Antifoam <br/><br/>
</a> </h6> <a href="#" className="text-muted" data-abc="true">Defoamers & Antifoams</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF 760 - 60% Silicone Defoamer/Antifoam <br/><br/>
</a> </h6> <a href="#" className="text-muted" data-abc="true">Defoamers & Antifoams</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF PP 730 Defoamer/ Antifoam for Paper & Pulp <br /> <br /> </a> </h6> <a href="#" className="text-muted" data-abc="true">Defoamers & Antifoams</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF SI 730 Defoamer/ Antifoam for Starch Industry
</a> </h6> <a href="#" className="text-muted" data-abc="true">Defoamers & Antifoams</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF TP 720 Defoamer/ Antifoam for ETP/STP Plants
</a> </h6> <a href="#" className="text-muted" data-abc="true">Defoamers & Antifoams</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF TP 730 Defoamer/ Antifoam for ETP/STP Plants
</a> </h6> <a href="#" className="text-muted" data-abc="true">Defoamers & Antifoams</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST  Defoamer/ Antifoam Conc. (100%) <br/><br/>
</a> </h6> <a href="#" className="text-muted" data-abc="true">Defoamers & Antifoams</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 id="siliconeemulsions" className="productheading border-bottom text-center mb-5 fw-bolder">Silicone Emulsions</h1>
            <div className="container d-flex justify-content-center mt-50 mb-50 mx-auto">
                <div className="row mx-auto">
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center mx-auto">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SE 15 Silicone Emulsion
</a> </h6> <a href="#" className="text-muted" data-abc="true">Silicone Emulsion</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SE 20 Silicone Emulsion
</a> </h6> <a href="#" className="text-muted" data-abc="true">Silicone Emulsions</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SE 30 Silicone Emulsion
</a> </h6> <a href="#" className="text-muted" data-abc="true">Silicone Emulsion</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SE 35 Silicone Emulsion
</a> </h6> <a href="#" className="text-muted" data-abc="true">Silicone Emulsion</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    
                        <div className="row justify-content-center">
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SE 50 Silicone Emulsion
</a> </h6> <a href="#" className="text-muted" data-abc="true">Silicone Emulsion</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div  className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SE 60 Silicone Emulsion
</a> </h6> <a href="#" className="text-muted" data-abc="true">Silicone Emulsion</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            <h1 id="paperandpulp" className="productheading border-bottom text-center mb-5 fw-bolder">Paper and Pulp Chemicals</h1>
            <div className="container d-flex justify-content-center mt-50 mb-50">
                <div className="row">
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">PP Defoamer/ Antifoam <br /> <br />
</a> </h6> <a href="#" className="text-muted" data-abc="true"> Paper and Pulp Chemicals </a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Fortified Rosin <br /> <br />
</a> </h6> <a href="#" className="text-muted" data-abc="true">Paper and Pulp Chemicals</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Dry Strength Resin (DSR) <br /> <br />
</a> </h6> <a href="#" className="text-muted" data-abc="true">Paper and Pulp Chemicals</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Urea Formaldehyde Resin (UFR)
</a> </h6> <a href="#" className="text-muted" data-abc="true">Paper and Pulp Chemicals</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Dispersing Agent
</a> </h6> <a href="#" className="text-muted" data-abc="true">Paper and Pulp Chemicals</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <h1 id="carcare" className="productheading border-bottom text-center mb-5 fw-bolder">Car Care Products</h1>
            <div className="container d-flex justify-content-center mt-50 mb-50">
                <div className="row">
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">All in One Polish</a> </h6> <a href="#" className="text-muted" data-abc="true">Car Care Products</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Silicone Polish
</a> </h6> <a href="#" className="text-muted" data-abc="true">Car Care Products</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Tyre & Dashboard Shiner
</a> </h6> <a href="#" className="text-muted" data-abc="true">Car Care Products</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Carnauba Wax Polish
</a> </h6> <a href="#" className="text-muted" data-abc="true">Car Care Products</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Wax Polish <br /> <br />
</a> </h6> <a href="#" className="text-muted" data-abc="true">Car Care Products</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Waterless Car Wash/ Dry Wash
</a> </h6> <a href="#" className="text-muted" data-abc="true">Car Care Products</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Car Dry Cleaning Chemical <br /> <br />
</a> </h6> <a href="#" className="text-muted" data-abc="true">Car Care Products</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Car Seat and Roof Cleaner <br /> <br />
</a> </h6> <a href="#" className="text-muted" data-abc="true">Car Care Products</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Car Wash Shampoo <br /> <br />
</a> </h6> <a href="#" className="text-muted" data-abc="true">Car Care Products</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Car Wash High Foam Shampoo
</a> </h6> <a href="#" className="text-muted" data-abc="true">Car Care Products</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <h1 id="watertreatment" className="productheading border-bottom text-center mb-5 fw-bolder">Water Treatment Chemicals</h1>
            <div className="container d-flex justify-content-center mt-50 mb-50">
                <div className="row">
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Flocculating Agent/ Poly Electrolyte <br /> <br />
</a> </h6> <a href="#" className="text-muted" data-abc="true">Water Treatment Chemicals</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">Bio Culture Chemical <br /> <br /> <br />
</a> </h6> <a href="#" className="text-muted" data-abc="true">Water Treatment Chemicals</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF TP 720 Defoamer/ Antifoam for ETP/STP Plants
</a> </h6> <a href="#" className="text-muted" data-abc="true">Water Treatment Chemicals</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="cardproducts">
                            <div className="card-body">
                                <div className="card-img-actions"> <img src={productimg} className="card-img img-fluid" width="96" height="350" alt="" /> </div>
                            </div>
                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2"> <a href="#" className="productsubhead mb-2" data-abc="true">CATALYST SAF TP 730 Defoamer/ Antifoam for ETP/STP Plants</a> </h6> <a href="#" className="text-muted" data-abc="true">Water Treatment Chemicals</a>
                                </div>
                                <h3 className="mb-0 font-weight-semibold"></h3>
                                <a href="/product#single" ><button type="button" className="btn productbtn" id="btn1" onClick={handleClick}><i className="fas fa-eye mr-2"></i>&nbsp;View</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductPage
