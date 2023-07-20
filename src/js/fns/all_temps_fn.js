var all_temps = []

const all_temps_fn = obj_temp => {
   all_temps.push(obj_temp)
   return all_temps
}


export {
   all_temps_fn,
   all_temps,
}