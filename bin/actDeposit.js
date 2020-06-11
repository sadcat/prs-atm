'use strict';

const { finance } = require('sushitrain');

const func = async (argv) => {
    const dResult = await atm.deposit(
        argv.pvtkey,
        argv.account,
        argv.email,
        argv.amount,
        argv.memo
    );
    if (!global.chainConfig.json
        && dResult && dResult.paymentUrl) {
        console.log(`\nOpen this URL in your browser:`
            + `\n\n${dResult.paymentUrl}\n`);
    }
    return randerResult(dResult, defTblConf);
};

module.exports = {
    pubkey: true,
    pvtkey: true,
    func,
    name: 'Deposit',
    help: [
        "    --action   Set as 'deposit'                  [STRING  / REQUIRED]",
        '    --account  PRESS.one account                 [STRING  / REQUIRED]',
        '    --amount   Number like xx.xxxx               [STRING  / REQUIRED]',
        '    --keystore Path to the keystore JSON file    [STRING  / OPTIONAL]',
        '    --password Use to decrypt the keystore       [STRING  / OPTIONAL]',
        '    --pvtkey   PRESS.one private key             [STRING  / OPTIONAL]',
        '    --email    Email for notification            [STRING  / OPTIONAL]',
        '    --memo     Comment to this transaction       [STRING  / OPTIONAL]',
        '    ┌---------------------------------------------------------------┐',
        '    | 1. `keystore` (recommend) or `pvtkey` must be provided.       |',
        '    | 2. After successful execution, you will get a URL.            |',
        '    | 3. Open this URL in your browser.                             |',
        '    | 4. Scan the QR code with Mixin to complete the payment.       |',
        '    | 5. You have to complete the payment within `'
        + `${finance.transferTimeout / 1000 / 60 / 60 / 24}\` days.          |`,
        '    | 6. SCANNING AN EXPIRED QR CODE WILL RESULT IN LOST MONEY.     |',
        '    | 7. Only `1` trx (deposit / withdrawal) is allowed at a time.  |',
        '    | 8. Finish, `cancel` or timeout a current trx before request.  |',
        '    └---------------------------------------------------------------┘',
        '',
        '    > Example:',
        '    $ prs-atm --action=deposit \\',
        '              --account=ABCDE \\',
        '              --amount=12.3456 \\',
        '              --keystore=keystore.json \\',
        '              --email=abc@def.com',
    ],
};
