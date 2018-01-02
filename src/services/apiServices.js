import axios from 'axios'


const endpoint = 'http://dnd5eapi.co/api'

export default {
    getAbilityScores,
    getAbilityScoresByIndex,
    getProficienceByIndex,
    getProficienceByClass,
    getProficiencies,
    getLanguageByIndex,
    getLanguages,
    getClassByIndex,
    getClassByName,
    getClasses,
    getSubclassByIndex,
    getSubclassByName,
    getSubclasses,
    getFeatureByIndex,
    getFeatures,
    getRaceByIndex,
    getRaces,
    getSkillByIndex,
    getSkills
}

function getAbilityScoresByIndex(index) {
    if (index <= 6 && index !== 0) {
        axios.get(endpoint + '/ability-scores/' + index)
          .then(function (response) {
            return response
          })
          .catch(function (error) {
            console.log(error);
          });
    } else {
        console.log('There is no such ability score on D&D 5!')
    }
}

function getSkillByIndex(index) {
    if (index <= 18 && index !== 0) {
        axios.get(endpoint + '/skill/' + index)
          .then(function (response) {
            return response
          })
          .catch(function (error) {
            console.log(error);
          });
    } else {
        console.log('There is no such skill on D&D 5!')
    }
}

function getProficienceByIndex(index) {
    if (index <= 122 && index !== 0) {
        axios.get(endpoint + '/proficiencies/' + index)
          .then(function (response) {
            return response
          })
          .catch(function (error) {
            console.log(error);
          });
    } else {
        console.log('There is no such skill on D&D 5!')
    }
}


function getProficienceByClass(param) {
    //use carefully
    axios.get(endpoint + '/proficiencies/' + param)
        .then(function (response) {
        return response
        })
        .catch(function (error) {
        console.log(error);
        });
}

function getLanguageByIndex(index) {
    if (index <= 16 && index !== 0) {
        axios.get(endpoint + '/languages/' + index)
          .then(function (response) {
            return response
          })
          .catch(function (error) {
            console.log(error);
          });
    } else {
        console.log('There is no such language on D&D 5!')
    }
}

function getClassByIndex(index) {
    if (index <= 12 && index !== 0) {
        axios.get(endpoint + '/classes/' + index)
          .then(function (response) {
            return response
          })
          .catch(function (error) {
            console.log(error);
          });
    } else {
        console.log('There is no such class on D&D 5!')
    }
}

function getClassByName(param) {
    //use carefully
    axios.get(endpoint + '/classes/' + param)
        .then(function (response) {
        return response
        })
        .catch(function (error) {
        console.log(error);
        });
}

function getSubclassByIndex(index) {
    if (index <= 12 && index !== 0) {
        axios.get(endpoint + '/subclasses/' + index)
          .then(function (response) {
            return response
          })
          .catch(function (error) {
            console.log(error);
          });
    } else {
        console.log('There is no such subclass on D&D 5!')
    }
}

function getSubclassByName(param) {
    //use carefully
    axios.get(endpoint + '/subclasses/' + param)
        .then(function (response) {
        return response
        })
        .catch(function (error) {
        console.log(error);
        });
}

function getFeatureByIndex(index) {
    if (index <= 414 && index !== 0) {
        axios.get(endpoint + '/features/' + index)
          .then(function (response) {
            return response
          })
          .catch(function (error) {
            console.log(error);
          });
    } else {
        console.log('There is no such feature on D&D 5!')
    }
}

function getRaceByIndex(index) {
    if (index <= 4 && index !== 0) {
        axios.get(endpoint + '/races/' + index)
          .then(function (response) {
            return response
          })
          .catch(function (error) {
            console.log(error);
          });
    } else {
        console.log('There is no such race on D&D 5!')
    }
}


////////////////////////////////////////////////
//GetAll endpoints
////////////////////////////////////////////////

function getAbilityScores(vm) {
    axios.get(endpoint + '/ability-scores/')
        .then(function (response) {
            vm.abilityScores = response.data.results.map(scr => {
                return {
                    name: scr.name,
                    url: scr.url
                }
            })
        })
        .catch(function (error) {
        console.log(error);
        });
}

function getSkills() {
    axios.get(endpoint + '/skill/')
        .then(function (response) {
        return response
        })
        .catch(function (error) {
        console.log(error);
        });
}

function getProficiencies() {
    axios.get(endpoint + '/proficiencies/')
        .then(function (response) {
        return response
        })
        .catch(function (error) {
        console.log(error);
        });
}

function getLanguages() {
    axios.get(endpoint + '/languages/')
        .then(function (response) {
        return response
        })
        .catch(function (error) {
        console.log(error);
        });
}

function getClasses(vm) {
    axios.get(endpoint + '/classes/')
        .then(function (response) {

        vm.classes = response.data.results
        })
        .catch(function (error) {
        console.log(error);
        });
}

function getSubclasses() {
    axios.get(endpoint + '/subclasses/')
        .then(function (response) {
        return response
        })
        .catch(function (error) {
        console.log(error);
        });
}

function getFeatures() {
    axios.get(endpoint + '/features/')
        .then(function (response) {
        return response
        })
        .catch(function (error) {
        console.log(error);
        });
}

function getRaces(vm) {
    return axios.get(endpoint + '/races/')
        .then(function (response) {
            vm.races = response.data.results
        })
        .catch(function (error) {
        console.log(error);
        });
}
