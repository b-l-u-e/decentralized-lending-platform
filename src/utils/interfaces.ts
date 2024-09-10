export interface RegistrationRequest {
    label: string; // label of the ENS domain (eg. web3js.eth, where web3js is the label)
    owner: string; // address of the wallet that will own the domain
    durationInSeconds: number; // how long the domain will registered for (set 31536000 for one year)
    secret: string; // random secret string
    resolver: string; // address of the domain name resolver (use 0x231b0Ee14048e9dCcD1d247744d114a4EB5E8E63 for the official ENS PublicResolver)
    setAsPrimary: boolean; // is the domain primary for the address registering the domain (creates reverese record)
    fuses: number; // fuses that will be burned for the domain name
}

export interface TextRecord {
    key: string;
    value: string;
}
