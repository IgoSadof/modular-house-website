const numberWithSpace = (x) => {
  return x
    .toString()
    .replace(/К|к|K|k/g, '000')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export default numberWithSpace;
