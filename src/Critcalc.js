import React, { useState, useEffect } from "react";

function Critcalc() {

    const [totalC, setTotalC] = useState(0);
    const [majorFC, setMajorFC] = useState(0);
    const [ecC, setEcC] = useState(0);
    const [minorBC, setMinorBC] = useState(0);
    const [minorFC, setMinorFC] = useState(0);
    const [kiltC, setKiltC] = useState(0);
    const [mediumC, setMediumC] = useState(0);
    const [khajiitC, setKhajiitC] = useState(0);
    const [nightBC, setNightBC] = useState(0);
    const [templarC, setTemplarC] = useState(0);
    const [wardenC, setWardenC] = useState(0);
    const [backSC, setBackSC] = useState(0);
    const [finesseC, setFinesseC] = useState(0);
  
    function handleTotal(){
      setTotalC(50+mediumC+minorFC+majorFC+ecC+minorBC+kiltC+khajiitC+nightBC+templarC+wardenC+finesseC+backSC);
    }
  
    useEffect(()=>{
      handleTotal();
    })
  
    function handleClass(e){
      if(e.target.id === "nightBC"){
        setNightBC(parseInt(e.target.value));
        setTemplarC(0);
        document.getElementById("templar").checked = false;
        setWardenC(0);
        document.getElementById("warden").value = 0;
      }else if(e.target.id === "templar"){
        setTemplarC(parseInt(e.target.value));
        setNightBC(0);
        document.getElementById("nightBC").checked = false;
        setWardenC(0);
        document.getElementById("warden").value = 0;
      }else if(e.target.id === "warden"){
        setWardenC(parseInt(e.target.value));
        setNightBC(0);
        document.getElementById("nightBC").checked = false;
        setTemplarC(0);
        document.getElementById("templar").checked = false;
      }
    }
  
    return (
      <main className="row justify-content-md-center">
        <h2 className="text-center">Crit Damage Calculator</h2>
        <form className="row col-lg-6 col-xl-5">
          <div className="row">
            <div className="col-6 text-end">
              <h5>Buff/Debuff</h5>
            </div>
              <div className="col-2 col-sm-1">
                <h5>-</h5>
            </div>
              <div className="col-3 col-sm-1">
                <h5>Crit</h5>
              </div>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Major Force</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="majorF" id="majorF" value="20" 
              onChange={(e) => e.target.checked === true ? setMajorFC(parseInt(e.target.value)) : setMajorFC(0)}/>
            </div>
            <label htmlFor="majorF" className="col-form-label col-3 col-sm-1 pt-0">{majorFC+"%"}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Elemental Catalyst</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="ec" id="ec" value="15" 
              onChange={(e) => e.target.checked === true ? setEcC(parseInt(e.target.value)) : setEcC(0)}/>
            </div>
            <label htmlFor="ec" className="col-form-label col-3 col-sm-1 pt-0">{ecC+"%"}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Minor Brittle</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="minorB" id="minorB" value="10" 
              onChange={(e) => e.target.checked === true ? setMinorBC(parseInt(e.target.value)) : setMinorBC(0)}/>
            </div>
            <label htmlFor="minorB" className="col-form-label col-3 col-sm-1 pt-0">{minorBC+"%"}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Minor Force</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="minorF" id="minorF" value="10" 
              onChange={(e) => e.target.checked === true ? setMinorFC(parseInt(e.target.value)) : setMinorFC(0)}/>
            </div>
            <label htmlFor="minorF" className="col-form-label col-3 col-sm-1 pt-0">{minorFC+"%"}</label>
          </div>
          <div className="row">
            <label htmlFor="mediumA" className="text-end col-form-label col-7 col-sm-6 pt-0">Medium Armor Pieces</label>
            <select id="mediumA" className="select-custom col-2 col-sm-1 mr-0" onChange={(e) => setMediumC(parseInt(e.target.value))}>
              <option value="0">0</option>
              <option value="2">1</option>
              <option value="4">2</option>
              <option value="6">3</option>
              <option value="8">4</option>
              <option value="10">5</option>
              <option value="12">6</option>
              <option value="14">7</option>
            </select>
            <label htmlFor="mediumA" className="col-form-label col-3 col-sm-1 pt-0">{mediumC+"%"}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Kilt</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="kilt" id="kilt" value="10" 
              onChange={(e) => e.target.checked === true ? setKiltC(parseInt(e.target.value)) : setKiltC(0)}/>
            </div>
            <label htmlFor="kilt" className="col-form-label col-3 col-sm-1 pt-0">{kiltC+"%"}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Khajiit</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="khajiit" id="khajiit" value="12" 
              onChange={(e) => e.target.checked === true ? setKhajiitC(parseInt(e.target.value)) : setKhajiitC(0)}/>
            </div>
            <label htmlFor="khajiit" className="col-form-label col-3 col-sm-1 pt-0">{khajiitC+"%"}</label>
          </div>
          <div className="row">
            <label htmlFor="warden" className="text-end col-form-label col-7 col-sm-6 pt-0">Warden Animal Skills</label>
            <select id="warden" className="select-custom col-2 col-sm-1" onChange={(e) => handleClass(e)}>
              <option value="0">0</option>
              <option value="4">1</option>
              <option value="8">2</option>
              <option value="12">3</option>
              <option value="16">4</option>
              <option value="20">5</option>
              <option value="24">6</option>
            </select>
            <label htmlFor="warden" className="col-form-label col-3 col-sm-1 pt-0">{wardenC+"%"}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Nightblade</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="nightBC" id="nightBC" value="10" 
              onChange={(e) => e.target.checked === true ? handleClass(e) : setNightBC(0)}/>
            </div>
            <label className="col-form-label col-3 col-sm-1 pt-0">{nightBC+"%"}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Templar</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="templar" id="templar" value="10" 
              onChange={(e) => e.target.checked === true ? handleClass(e) : setTemplarC(0)}/>
            </div>
            <label className="col-form-label col-3 col-sm-1 pt-0">{templarC+"%"}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Fighting Finesse</label>
            <div className="form-check col-2 col-sm-1">
                <input className="form-check-input" type="checkbox" name="finesse" id="finesse" value="8" 
                onChange={(e) => e.target.checked === true ? setFinesseC(parseInt(e.target.value)) : setFinesseC(0)}/>
            </div>
            <label htmlFor="finesse" className="col-form-label col-3 col-sm-1 pt-0">{finesseC+"%"}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Backstabber</label>
            <div className="form-check col-2 col-sm-1">
                <input className="form-check-input" type="checkbox" name="backS" id="backS" value="10" 
                onChange={(e) => e.target.checked === true ? setBackSC(parseInt(e.target.value)) : setBackSC(0)}/>
            </div>
            <label htmlFor="backS" className="col-form-label col-3 col-sm-1 pt-0">{backSC+"%"}</label>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 col-lg-3">
              <h5 className="text-end total-pen">Total Crit Damage</h5>
            </div>
            <div className="col-6 col-lg-3">
              <h5 className="total-pen">{totalC + "%"}</h5>
            </div>
          </div>
        </form>
      </main>
    );
  }
    
export default Critcalc;