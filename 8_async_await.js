// Made up code
// imported chargeCard
const chargeCard = () =>
  new Promise((resolve, reject) => {
    // card is valid
    // reject("fail!!!");
    if (true) {
      return resolve(true);
    }
    return resolve(false);
  });

const chargeCC = async ccNumber => {
  try {
    const res = await chargeCard(ccNumber);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

chargeCC('54645');