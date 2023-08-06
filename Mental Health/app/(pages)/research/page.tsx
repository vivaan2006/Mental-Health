import React from 'react';

const ResearchPage = () => {
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#FFFFFF' }}>
        Stating the Problem
      </h1>
      <br />
      <p style={{ padding: '0 225px' }}>
        Expanding mental health initiatives and resources is crucial for creating a more inclusive 
        and supportive society that prioritizes the well-being of all individuals.  Expanding mental health 
        initiatives and resources is crucial for creating a more inclusive and supportive society that prioritizes 
        the well-being of all individuals.

      </p>

      <br /><br />
      <h2 className="text-4xl font-bold text-center text-white py-4">
        Countries with the Highest Depression Rates
      </h2>

      <table style={{ width: '80%', margin: 'auto', border: '1px solid #ccc', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th className='text-black'>Country</th>
            <th className='text-black'>Population</th>
            <th className='text-black'>Depression Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Greece</td>
            <td>10.43 million</td>
            <td>6.53%</td>
          </tr>
          <tr>
            <td>Spain</td>
            <td>47.42 million</td>
            <td>6.04%</td>
          </tr>
          <tr>
            <td>Portugal</td>
            <td>10.35 million</td>
            <td>5.88%</td>
          </tr>
          <tr>
            <td>Palestine</td>
            <td>3.0 million</td>
            <td>5.78%</td>
          </tr>
          <tr>
            <td>Tunisia</td>
            <td>12.26 million</td>
            <td>5.75%</td>
          </tr>
          <tr>
            <td>Bahrain</td>
            <td>445.37 thousand</td>
            <td>5.52%</td>
          </tr>
          <tr>
            <td>Morocco</td>
            <td>37.08 million</td>
            <td>5.49%</td> 
          </tr>
          <tr>
            <td>Iran</td>
            <td>86.76 million</td>
            <td>5.48%</td>
          </tr>
          <tr>
            <td>Ukraine</td>
            <td>43.79 million</td>
            <td>5.45%</td>
          </tr>
          <tr>
            <td>Lithuania</td>
            <td>2.80 million</td>
            <td>5.42%</td>
          </tr>
        </tbody>
      </table>

      <br /><br />

      <h1>The table above shows the highest depression rates in the world, thus suggesting to fund more mental help in these countries.</h1>

      <br /><br />

      <h2 className="text-4xl font-bold text-center text-white py-4">
        Countries with the Global Burden of Disease
      </h2>

      <table style={{ width: '80%', margin: 'auto', border: '1px solid #ccc', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th className='text-black'>Country</th>
            <th className='text-black'>GER</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brazil</td>
            <td>20.3%</td>
          </tr>
          <tr>
            <td>Japan</td>
            <td>24.6%</td>
          </tr>
          <tr>
            <td>Spain</td>
            <td>27.4%</td>
          </tr>
          <tr>
            <td>Austrailia</td>
            <td>29.4%</td>
          </tr>
          <tr>
            <td>Belgium</td>
            <td>29.4%</td>
          </tr>
          <tr>
            <td>Netherlands</td>
            <td>30.8%</td>
          </tr>
          <tr>
            <td>United States of America</td>
            <td>30.9%</td> 
          </tr>
          <tr>
            <td>Germany</td>
            <td>30.9%</td>
          </tr>
          <tr>
            <td>France</td>
            <td>32%</td>
          </tr>
          <tr>
            <td>Switzerland</td>
            <td>35.1%</td>
          </tr>
        </tbody>
      </table>

      <br /><br />

      <h1>The table above shows the countries with the highest Global burden of disease, which allows us to focus on expanding mental help to these countries.</h1>
      
      <br />
    </div>
  );
};

export default ResearchPage;