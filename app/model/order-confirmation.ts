export class OrderConfirmation {
    confirmed: boolean;
    priorDays: number;
    public toString = () => {
        return `Order confirmation = (${
        "\nConfirmed = " + this.confirmed
        + "\nPrior to days = " + this.priorDays
            })`
    }
}
