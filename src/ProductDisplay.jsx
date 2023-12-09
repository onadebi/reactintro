
import './css/product.css';
// Inline CSS styling
// External Stylesheet -
// 'Object' format {}
// Accessibilty
function ProductDisplay() { // THe name of the Component function
  return (          // WEbpage/component Body
    <div>
        <div style={{textAlign:'center',color: 'green'}}>
            <h3>This is a catalog of all the products we sell on our website.</h3>
        </div>
        <section id="sectionBody" style={{display:'flex',gap:'10px', justifyContent:'space-between', padding:'15px'}}>
          <table className='tblProducts'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>
                    <img src="https://images.pexels.com/photos/346746/pexels-photo-346746.jpeg" alt="A lady carying an expensive bag." height={350} width="400"/>
                  </td>
                  <td>
                    $100
                    </td>
                  <td>
                    Handbag made of leather
                  </td>
                </tr>
                <tr>
                    <td>
                    <img src="https://images.pexels.com/photos/12428368/pexels-photo-12428368.jpeg" alt="A lady carying another expensive bag." height={350} width="400"/>
                    </td>
                    <td>
                    $200
                    </td>
                    <td>
                      Crocodile leather handbag
                    </td>
                </tr>
                <tr>
                    <td>
                      <img src="https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg" alt="A lady carying more expensive bag." height={350} width="400"/>
                    </td>
                    <td>
                      $300
                    </td>
                    <td>
                      Emeald Ear rings
                      </td>  
                </tr>
            </tbody>
          </table>          
            
            
        </section>
        </div>
  );
};

export default ProductDisplay;
