import './Budget.css'

function Budget() {
    return(
        <div className='budget-block'>
            <h1 className='main-topic'>Budget</h1>
            <br></br>
            <br></br>
            <br></br>
            
            <table>
    <tr>
        
        <th>Component </th>
        <th>Unit Price(Rs.)</th>
        <th>Quantity</th>
        <th>Price</th>
    </tr>
    <tr>
        <td>ESP32</td>
        <td>1500</td>
        <td>1</td>
        <td>1500</td>
    </tr>
    <tr>
        <td>Atmega328p</td>
        <td>750</td>
        <td>2</td>
        <td>1500</td>
    </tr>
    <tr>
        <td>NEO8M-GPS</td>
        <td>2190</td>
        <td>1</td>
        <td>2190</td>
    </tr>
    <tr>
        <td>GSM Module</td>
        <td>1950</td>
        <td>1</td>
        <td>1950</td>
    </tr>
    <tr>
        <td>GY80 - IMU</td>
        <td>2800</td>
        <td>1</td>
        <td>2800</td>
    </tr>
    <tr>
        <td>Motors 150RPM</td>
        <td>1500</td>
        <td>4</td>
        <td>6000</td>
    </tr>
    <tr>
        <td>Tires Chassis and other robot components</td>
        <td>5000</td>
        <td>1</td>
        <td>5000</td>
    </tr>
    <tr>
        <td>DT11</td>
        <td>1000</td>
        <td>1 </td>
        <td>1000</td>
    </tr>
    <tr>
        <td>Ultrasonic sensors(HCSR04)</td>
        <td>250</td>
        <td>3</td>
        <td>750</td>
    </tr>
    <tr>
        <td>Copper wire</td>
        <td>250</td>
        <td>1 (10m)</td>
        <td>250</td>
    </tr>
    <tr>
        <td>Resistors capacitors and other components</td>
        <td>500</td>
        <td>1</td>
        <td>500</td>
    </tr>
    <tr>
        <td>12V battery LiPo</td>
        <td>5000</td>
        <td>1</td>
        <td>5000</td>
    </tr>
    <tr >
        <td className='total'>Total</td>
        <td className='total'></td>
        <td className='total'></td>
        <td className='total' >28440</td>
    </tr>
  
</table>

            
          
        </div>


    )

}
export default Budget;