const NFTs = [];

function mintNFT(_name, _age, _salary, _designation) {
    const NFT = {
        "Name": _name,
        "Age": _age,
        "Salary": _salary,
        "Designation": _designation,
    };
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].Name);
        console.log("Age: \t\t" + NFTs[i].Age);
        console.log("Salary: \t" + NFTs[i].Salary);
        console.log("Designation: \t" + NFTs[i].Designation);
    }
}

function getTotalSupply() {
    console.log("\nTotal Supply: " + NFTs.length);
}

// Call the functions below this line
mintNFT("Michael", "30", "100000", "HR");
mintNFT("Francis", "28", "85000", "Manager");
mintNFT("Stephen", "27", "60000", "Employee");
mintNFT("Tommy", "26", "60000", "Employee");
mintNFT("Maverick", "27", "60000", "Employee");

listNFTs();
getTotalSupply();
