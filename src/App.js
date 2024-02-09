import Menu from "./component/Menu"
import Contact from "./component/contact"
export default function App(){
  return<div>
   
<section id="mu-hero">
<Menu/>

</section>


<main role="main">

 
  <section id="mu-counter">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-counter-area">

            <div className="mu-counter-block">
              <div className="row">

               
                <div className="col-md-3 col-sm-6">
                  <div className="mu-single-counter">
                    <i className="fa fa-files-o" aria-hidden="true"></i>
                    <div className="counter-value" data-count="650">0</div>
                    <h5 className="mu-counter-name">Total Pages</h5>
                  </div>
                </div>
             
                <div className="col-md-3 col-sm-6">
                  <div className="mu-single-counter">
                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    <div className="counter-value" data-count="422">0</div>
                    <h5 className="mu-counter-name">Chapters</h5>
                  </div>
                </div>
               
                <div className="col-md-3 col-sm-6">
                  <div className="mu-single-counter">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <div className="counter-value" data-count="1055">0</div>
                    <h5 className="mu-counter-name">Active Readers</h5>
                  </div>
                </div>
              
                <div className="col-md-3 col-sm-6">
                  <div className="mu-single-counter">
                    <i className="fa fa-trophy" aria-hidden="true"></i>
                    <div className="counter-value" data-count="03">0</div>
                    <h5 className="mu-counter-name">Got Awards</h5>
                  </div>
                </div>
            {/* khsdkhdskdashk */}

              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </section>
  <div>
   
  </div>

</main>
  </div>

}
