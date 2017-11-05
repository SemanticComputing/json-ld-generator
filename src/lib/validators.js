const validators = {
  isValidUrl: (value) => {
    if (!value)
      return undefined;
    let a  = document.createElement('a');
    a.href = value;
    return !!(a.host && a.host !== window.location.host);
  }
};

export default validators;
