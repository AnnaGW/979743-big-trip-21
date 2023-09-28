function createTripTotalTemplate(totalPrice) {
  return `
  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
  </p>
  `;
}

export { createTripTotalTemplate };
