import React, { useState, useEffect } from "react";

function Pencalc() {

  const [pCheck, setPCheckP] = useState(true);
  const [pierciingP, setPierciingP] = useState(700);
  const [majorBP, setMajorBP] = useState(5948);
  const [minorBP, setMinorBP] = useState(2974);
  const [crusherP, setCrusherP] = useState(2108);
  const [alkoshP, setAlkoshP] = useState(0);
  const [lightP, setLightP] = useState(0);
  const [totalP, setTotalP] = useState(0);
  const [nightBP, setNightBP] = useState(0);
  const [necroP, setNecroP] = useState(0);
  const [woodEP, setWoodEP] = useState(0);
  const [setBonusP, setSetBonusP] = useState(0);
  const [velothiP, setVelothiP] = useState(0);
  const [tremorP, setTremorP] = useState(0);

  function handleTotal(){
    setTotalP(pierciingP+majorBP+minorBP+crusherP+alkoshP+lightP+nightBP+necroP+woodEP+setBonusP+velothiP+tremorP);
  }

  useEffect(()=>{
    handleTotal();
  })

  function handleCheck(e){
    console.log(e)
    console.log(e.target.checked)
    if(e.target.checked === false){
      e.target.checked = true;
      console.log(e.target.checked)
      return;
    }
  }

  return (
    <main className="row justify-content-md-center">
        <h2 className="text-center">Penetration Calculator</h2>
        <div className="row col-12">
          <div className="col-6 text-end">
            <h4>Buff/Debuff</h4>
          </div>
          <div className="row col-6">
            <div className="col-1">
              <h4>Yes</h4>
            </div>
            <div className="row col-2">
              <h4>No</h4>
            </div>
          </div>
        </div>
        <form className="row col-6">
          <div className="row">
            <label className="text-end col-form-label col-sm-6 pt-0">Peircing CP</label>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="checkbox" name="piercing" id="piercing" value="700" defaultChecked onChange={(e) => e.target.checked === true ? setPierciingP(parseInt(e.target.value)) : setPierciingP(0)}/>
            </div>
            <label htmlFor="piercing" className="col-form-label col-1 pt-0">{pierciingP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-sm-6 pt-0">Major Breach</label>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="checkbox" name="majorB" id="majorB" value="5948" defaultChecked onChange={(e) => e.target.checked === true ? setMajorBP(parseInt(e.target.value)) : setMajorBP(0)}/>
            </div>
            <label htmlFor="majorB" className="col-form-label col-1 pt-0">{majorBP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-sm-6 pt-0">Minor Breach</label>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="checkbox" name="minorB" id="minorB" value="2974" defaultChecked onChange={(e) => e.target.checked === true ? setMinorBP(parseInt(e.target.value)) : setMinorBP(0)}/>
            </div>
            <label htmlFor="minorB" className="col-form-label col-1 pt-0">{minorBP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-sm-6 pt-0">Infused Crusher</label>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="checkbox" name="crusher" id="crusher" value="2108" defaultChecked onChange={(e) => e.target.checked === true ? setCrusherP(parseInt(e.target.value)) : setCrusherP(0)}/>
            </div>
            <label htmlFor="crusher" className="col-form-label col-1 pt-0">{crusherP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-sm-6 pt-0">Alkosh</label>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="checkbox" name="alkosh" id="alkosh" value="6000" onChange={(e) => e.target.checked === true ? setAlkoshP(parseInt(e.target.value)) : setAlkoshP(0)}/>
            </div>
            <label htmlFor="alkosh" className="col-form-label col-1 pt-0">{alkoshP}</label>
          </div>
          <div className="row">
            <label htmlFor="lightA" className="text-end col-form-label col-sm-6 pt-0">Light Armor Pieces</label>
            <select id="lightA" className="select-custom col-1" onChange={(e) => setLightP(parseInt(e.target.value))}>
              <option value="0">0</option>
              <option value="939">1</option>
              <option value="1878">2</option>
              <option value="2817">3</option>
              <option value="3756">4</option>
              <option value="4695">5</option>
              <option value="5634">6</option>
              <option value="6573">7</option>
            </select>
            <label htmlFor="lightA" className="col-form-label col-1 pt-0">{lightP}</label>
          </div>
          <div className="row">
            <label htmlFor="nightB" className="text-end col-form-label col-sm-6 pt-0">Nightblade</label>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="radio" name="nightB" id="nightB1" value="2974" onChange={(e) => setNightBP(parseInt(e.target.value))}/>
              <label className="form-check-label " htmlFor="NghtB1">2974</label>
            </div>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="radio" name="nightB" id="nightB2" value="0" defaultChecked onChange={(e) => setNightBP(parseInt(e.target.value))}/>
              <label className="form-check-label" htmlFor="nightB2">0</label>
            </div>
          </div>
          <div className="row">
            <label htmlFor="necro" className="text-end col-form-label col-sm-6 pt-0">Necro</label>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="radio" name="necro" id="necro1" value="1500" onChange={(e) => setNecroP(parseInt(e.target.value))}/>
              <label className="form-check-label " htmlFor="NghtB1">1500</label>
            </div>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="radio" name="necro" id="necro2" value="0" defaultChecked onChange={(e) => setNecroP(parseInt(e.target.value))}/>
              <label className="form-check-label" htmlFor="necro2">0</label>
            </div>
          </div>
          <div className="row">
            <label htmlFor="woodE" className="text-end col-form-label col-sm-6 pt-0">Woodelf</label>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="radio" name="woodE" id="woodE1" value="950" onChange={(e) => setWoodEP(parseInt(e.target.value))}/>
              <label className="form-check-label " htmlFor="NghtB1">950</label>
            </div>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="radio" name="woodE" id="woodE2" value="0" defaultChecked onChange={(e) => setWoodEP(parseInt(e.target.value))}/>
              <label className="form-check-label" htmlFor="woodE2">0</label>
            </div>
          </div>
          <div className="row">
            <label htmlFor="setBonus" className="text-end col-form-label col-sm-6 pt-0">Regular Set Bonuses</label>
            <select id="setBonus" className="select-custom col-1" onChange={(e) => setSetBonusP(parseInt(e.target.value))}>
              <option value="0">0</option>
              <option value="1487">1</option>
              <option value="2974">2</option>
              <option value="4461">3</option>
              <option value="5948">4</option>
            </select>
            <label htmlFor="setBonus" className="col-form-label col-1 pt-0">{setBonusP}</label>
          </div>
          <div className="row">
            <label htmlFor="velothi" className="text-end col-form-label col-sm-6 pt-0">Velothi</label>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="radio" name="velothi" id="velothi1" value="1650" onChange={(e) => setVelothiP(parseInt(e.target.value))}/>
              <label className="form-check-label " htmlFor="NghtB1">1650</label>
            </div>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="radio" name="velothi" id="velothi2" value="0" defaultChecked onChange={(e) => setVelothiP(parseInt(e.target.value))}/>
              <label className="form-check-label" htmlFor="velothi2">0</label>
            </div>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-sm-6 pt-0">Tremorscale</label>
            <div className="form-check form-check-inline col-1">
              <input className="form-check-input" type="checkbox" name="tremor" id="tremor" value="2400" onChange={(e) => e.target.checked === true ? setTremorP(parseInt(e.target.value)) : setTremorP(0)}/>
            </div>
            <label htmlFor="tremor" className="col-form-label col-1 pt-0">{tremorP}</label>
          </div>
          <div className="row">
            <p className="text-end col-6">Total Pen</p>
            <p className="col-6">{totalP}</p>
          </div>
        </form>
    </main>
  );
}

export default Pencalc;
