import Component, {tracked} from '@glimmer/component';

export default class NationBuilderDonations extends Component {
  @tracked 
  amount: Number;

  // Default to 'amount' location
  @tracked
  location: String = 'amount';

  donationAmounts: [Number] = [10, 5, 25, 50, 100];

  @tracked('location')
  get showAmount(): Boolean { return this.location === 'amount'; };

  @tracked('location')
  get showDetails(): Boolean { return this.location === 'details'; };

  updateAmount(amount: Number): void {
    this.amount = amount;
    this.location = 'details';
  };
}
