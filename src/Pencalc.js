import React, { useState, useEffect } from "react";

function Pencalc() {

  const [totalP, setTotalP] = useState(0);
  const [pierciingP, setPierciingP] = useState(700);
  const [majorBP, setMajorBP] = useState(5948);
  const [minorBP, setMinorBP] = useState(2974);
  const [crusherP, setCrusherP] = useState(2108);
  const [alkoshP, setAlkoshP] = useState(0);
  const [lightP, setLightP] = useState(0);
  const [nightBP, setNightBP] = useState(0);
  const [necroP, setNecroP] = useState(0);
  const [woodEP, setWoodEP] = useState(0);
  const [setBonusP, setSetBonusP] = useState(0);
  const [velothiP, setVelothiP] = useState(0);
  const [tremorP, setTremorP] = useState(0);
  const [arenaWP, setArenaWP] = useState(0);
  const [arcanistP, setArcanistP] = useState(0);
  const [crimsonP, setCrimsonP] = useState(0);

  function handleTotal(){
    setTotalP(pierciingP+majorBP+minorBP+crusherP+alkoshP+lightP+nightBP+necroP+woodEP+setBonusP+velothiP+tremorP+arenaWP+arcanistP+crimsonP);
  }

  useEffect(()=>{
    handleTotal();
  })

  function handleClass(e){
    if(e.target.id === "nightB"){
      setNightBP(parseInt(e.target.value));
      setNecroP(0);
      document.getElementById("necro").checked = false;
      setArcanistP(0);
      document.getElementById("arcanist").value = 0;
    }else if(e.target.id === "necro"){
      setNecroP(parseInt(e.target.value));
      setNightBP(0);
      document.getElementById("nightB").checked = false;
      setArcanistP(0);
      document.getElementById("arcanist").value = 0;
    }else if(e.target.id === "arcanist"){
      setArcanistP(parseInt(e.target.value));
      setNightBP(0);
      document.getElementById("nightB").checked = false;
      setNecroP(0);
      document.getElementById("necro").checked = false;
    }
  }

  return (
    <main className="row justify-content-md-center">
        <h2 className="text-center">Penetration Calculator</h2>
        <form className="row col-lg-6 col-xl-5">
          <div className="row">
            <div className="col-6 text-end">
              <h5>Buff/Debuff</h5>
            </div>

              <div className="col-2 col-sm-1">
                <h5>-</h5>
              </div>
              <div className="col-3 col-sm-1">
                <h5>Pen</h5>
              </div>

          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Major Breach</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="majorB" id="majorB" value="5948" defaultChecked 
              onChange={(e) => e.target.checked === true ? setMajorBP(parseInt(e.target.value)) : setMajorBP(0)}/>
            </div>
            <label htmlFor="majorB" className="col-form-label col-3 col-sm-1 pt-0">{majorBP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Minor Breach</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="minorB" id="minorB" value="2974" defaultChecked 
              onChange={(e) => e.target.checked === true ? setMinorBP(parseInt(e.target.value)) : setMinorBP(0)}/>
            </div>
            <label htmlFor="minorB" className="col-form-label col-3 col-sm-1 pt-0">{minorBP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Infused Crusher</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="crusher" id="crusher" value="2108" defaultChecked 
              onChange={(e) => e.target.checked === true ? setCrusherP(parseInt(e.target.value)) : setCrusherP(0)}/>
            </div>
            <label htmlFor="crusher" className="col-form-label col-3 col-sm-1 pt-0">{crusherP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Alkosh</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="alkosh" id="alkosh" value="6000" 
              onChange={(e) => e.target.checked === true ? setAlkoshP(parseInt(e.target.value)) : setAlkoshP(0)}/>
            </div>
            <label htmlFor="alkosh" className="col-form-label col-3 col-sm-1 pt-0">{alkoshP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Tremorscale</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="tremor" id="tremor" value="2400" 
              onChange={(e) => e.target.checked === true ? setTremorP(parseInt(e.target.value)) : setTremorP(0)}/>
            </div>
            <label className="col-form-label col-3 col-sm-1 pt-0">{tremorP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Crimson Oath</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="crimson" id="crimson" value="3541" 
              onChange={(e) => e.target.checked === true ? setCrimsonP(parseInt(e.target.value)) : setCrimsonP(0)}/>
            </div>
            <label className="col-form-label col-3 col-sm-1 pt-0">{crimsonP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Peircing CP</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="piercing" id="piercing" value="700" defaultChecked 
              onChange={(e) => e.target.checked === true ? setPierciingP(parseInt(e.target.value)) : setPierciingP(0)}/>
            </div>
            <label htmlFor="piercing" className="col-form-label col-3 col-sm-1 pt-0">{pierciingP}</label>
          </div>
          <div className="row">
            <label htmlFor="lightA" className="text-end col-form-label col-7 col-sm-6 pt-0">Light Armor Pieces</label>
            <select id="lightA" className="select-custom col-2 col-sm-1 mr-0" onChange={(e) => setLightP(parseInt(e.target.value))}>
              <option value="0">0</option>
              <option value="939">1</option>
              <option value="1878">2</option>
              <option value="2817">3</option>
              <option value="3756">4</option>
              <option value="4695">5</option>
              <option value="5634">6</option>
              <option value="6573">7</option>
            </select>
            <label htmlFor="lightA" className="col-form-label col-3 col-sm-1 pt-0">{lightP}</label>
          </div>
          <div className="row">
            <label htmlFor="arcanist" className="text-end col-form-label col-7 col-sm-6 pt-0">Arcanist Herald Skills</label>
            <select id="arcanist" className="select-custom col-2 col-sm-1" onChange={(e) => handleClass(e)}>
              <option value="0">0</option>
              <option value="991">1</option>
              <option value="1982">2</option>
              <option value="2973">3</option>
              <option value="3964">4</option>
              <option value="4955">5</option>
              <option value="5946">6</option>
            </select>
            <label htmlFor="arcanist" className="col-form-label col-3 col-sm-1 pt-0">{arcanistP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Nightblade</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="nightB" id="nightB" value="2974" 
              onChange={(e) => e.target.checked === true ? handleClass(e) : setNightBP(0)}/>
            </div>
            <label className="col-form-label col-3 col-sm-1 pt-0">{nightBP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Necro</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="necro" id="necro" value="1500" 
              onChange={(e) => e.target.checked === true ? handleClass(e) : setNecroP(0)}/>
            </div>
            <label className="col-form-label col-3 col-sm-1 pt-0">{necroP}</label>
          </div>
          <div className="row">
            <label htmlFor="setBonus" className="text-end col-form-label col-7 col-sm-6 pt-0">Regular Set Bonuses</label>
            <select id="setBonus" className="select-custom col-2 col-sm-1" onChange={(e) => setSetBonusP(parseInt(e.target.value))}>
              <option value="0">0</option>
              <option value="1487">1</option>
              <option value="2974">2</option>
              <option value="4461">3</option>
              <option value="5948">4</option>
            </select>
            <label htmlFor="setBonus" className="col-form-label col-3 col-sm-1 pt-0">{setBonusP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Woodelf</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="woodE" id="woodE" value="950" 
              onChange={(e) => e.target.checked === true ? setWoodEP(parseInt(e.target.value)) : setWoodEP(0)}/>
            </div>
            <label className="col-form-label col-3 col-sm-1 pt-0">{woodEP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Velothi</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="velothi" id="velothi" value="1650" 
              onChange={(e) => e.target.checked === true ? setVelothiP(parseInt(e.target.value)) : setVelothiP(0)}/>
            </div>
            <label className="col-form-label col-3 col-sm-1 pt-0">{velothiP}</label>
          </div>
          <div className="row">
            <label className="text-end col-form-label col-7 col-sm-6 pt-0">Arena Weapon</label>
            <div className="form-check col-2 col-sm-1">
              <input className="form-check-input" type="checkbox" name="arenaWP" id="arenaWP" value="1190" 
              onChange={(e) => e.target.checked === true ? setArenaWP(parseInt(e.target.value)) : setArenaWP(0)}/>
            </div>
            <label className="col-form-label col-3 col-sm-1 pt-0">{arenaWP}</label>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 col-lg-3">
             <h5 className="text-end total-pen">Total Pen</h5>
            </div>
            <div className="col-6 col-lg-3">
              <h5 className="total-pen">{totalP}</h5>
            </div>
          </div>
        </form>
    </main>
  );
}

export default Pencalc;
