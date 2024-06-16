import PropTypes from 'prop-types';

const countrycode = [
    {
        country : 'US',
        code : +1
    },
    {
        country : 'GB',
        code  : +44
    },
    {
        country : 'CA',
        code  : +1
    },
    {
        country : 'IN',
        code  : +91
    },
    {
        country : 'AU',
        code  : +61
    }

]

const Form = ({id}) => {
  return (
    <div className='text-white flex flex-col justify-center items-center  border border-green-500 h-[60vh] gap-5 '>
        <h1 className='text-5xl -mt-42 mb-28'>Form {id} </h1>
      <div className="name flex justify-evenly gap-x-3">
        <label className='text-xl bg-slate-500 p-1 rounded-lg'>Name:</label>
        <input type="text" required placeholder="Name..." className='rounded-lg outline-none border p-1' />
      </div>
      <div className="phone flex justify-around gap-x-3">
        <div className="countrycode">
        <select id="cars" className='bg-slate-500 rounded p-1 outline-none '>
            {countrycode.map((c,index)=>{
                return <option key={index} value={c.country}>{`+${c.code} ${c.country}`}</option>
            })}
        </select>
        </div>
        <div className="number">
            <input  required type="text" placeholder='Number...'  className='rounded-lg outline-none border p-1' />
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
    id: PropTypes.string.isRequired,
   
  };

export default Form;
