'use strict';

const { } = require('../index');

const func = async (argv) => {
    let aResult = null;
    if (argv.account) {
        const resp = await ballot.queryByOwner(argv.account);
        aResult = resp ? [resp] : [];
    } else {
        aResult = await ballot.queryAll();
    }
    for (let item of aResult) {
        item.producers = item.producers.join('\n');
    }
    return randerResult(aResult, {
        table: {
            columns: [
                'owner',
                'proxy',
                'producers',
                'staked',
                'last_vote_weight',
                'proxied_vote_weight',
                'is_proxy',
            ],
            config: {
                singleLine: true,
                columns: {
                    0: { alignment: 'right' },
                    1: { alignment: 'right' },
                    2: { alignment: 'right' },
                    3: { alignment: 'right' },
                    4: { alignment: 'right' },
                    5: { alignment: 'right' },
                    6: { alignment: 'right' },
                }
            }
        }
    });
};

module.exports = {
    func,
    name: 'Check Voting Information',
    help: [
        "    --action   Set as 'ballot'                   [STRING  / REQUIRED]",
        '    --account  PRESS.one account                 [STRING  / OPTIONAL]',
        '',
        '    > Example of checking global voting information:',
        '    $ prs-atm --action=ballot',
        '',
        "    > Example of checking account's voting information:",
        '    $ prs-atm --action=ballot \\',
        '              --account=ABCDE',
    ],
};
