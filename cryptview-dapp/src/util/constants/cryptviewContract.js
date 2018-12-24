const address = '0x2e243c20ca650ade1c6ce9a77818b784ffc20389'
const ABI = [
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newTreasury',
                'type': 'address'
            }
        ],
        'name': 'changeTreasury',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'ideaId',
                'type': 'uint256'
            },
            {
                'name': 'replyId',
                'type': 'uint256'
            }
        ],
        'name': 'dislike',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'message',
                'type': 'string'
            }
        ],
        'name': 'donate',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'ideaId',
                'type': 'uint256'
            },
            {
                'name': 'replyId',
                'type': 'uint256'
            }
        ],
        'name': 'like',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_content',
                'type': 'string'
            },
            {
                'name': '_canUpdate',
                'type': 'bool'
            },
            {
                'name': '_nickname',
                'type': 'string'
            }
        ],
        'name': 'newIdea',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'ideaId',
                'type': 'uint256'
            },
            {
                'name': '_content',
                'type': 'string'
            },
            {
                'name': '_canUpdate',
                'type': 'bool'
            },
            {
                'name': '_nickname',
                'type': 'string'
            }
        ],
        'name': 'reply',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'ideaId',
                'type': 'uint256'
            },
            {
                'name': 'replyId',
                'type': 'uint256'
            }
        ],
        'name': 'reward',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'ideaId',
                'type': 'uint256'
            },
            {
                'name': 'replyId',
                'type': 'uint256'
            },
            {
                'name': '_content',
                'type': 'string'
            }
        ],
        'name': 'update',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'ideaId',
                'type': 'uint256'
            },
            {
                'name': 'replyId',
                'type': 'uint256'
            }
        ],
        'name': 'getAllRewards',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'ideaId',
                'type': 'uint256'
            },
            {
                'name': 'replyId',
                'type': 'uint256'
            }
        ],
        'name': 'getLikes',
        'outputs': [
            {
                'name': '',
                'type': 'int256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'name': '',
                'type': 'address'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }
]
export {address, ABI}
