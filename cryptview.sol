pragma solidity ^0.5.0;

import "./ownable.sol";

contract CryptView is Ownable {
    
    uint public count;
    address payable private treasury;

    struct Reward {
        address from;
        uint256 value;
    }

    struct Donation {
        address from;
        string message;
        uint256 value;
    }

    struct Idea {
        address payable sender;
        string content;
        string nickname;
        bool canUpdate;
        uint32 time;
    }

    mapping(uint => Idea[]) public ideas;  //idea & reply
    mapping(uint => mapping(uint => int)) private likes;   //all the thumb-ups
    mapping(uint => mapping(uint => Reward[])) private rewards; //all the rewards(eth)
    Donation[] private donations;    //donations to the owner of the contract

    constructor() public {
        treasury = owner;
    }

    function changeTreasury(address payable newTreasury) public onlyOwner {
        require(newTreasury != address(0));
        treasury = newTreasury;
    }

    function newIdea(string memory _content, bool _canUpdate, string memory _nickname) public payable {
        ideas[count].push(Idea(msg.sender, _content, _nickname, _canUpdate, uint32(now)));
        count++;
    }
    
    function getLikes(uint ideaId, uint replyId) view public returns (int) {
        return likes[ideaId][replyId];
    }

    function update(uint ideaId, uint replyId, string memory _content) public {
        Idea storage myidea = ideas[ideaId][replyId];
        require(myidea.sender == msg.sender && ideas[ideaId][replyId].canUpdate);
        myidea.content = _content;
    }

    function reply(uint ideaId, string memory _content, bool _canUpdate, string memory _nickname) public {
        require(ideaId < count);    //check if idea|reply exists
        ideas[ideaId].push(Idea(msg.sender, _content, _nickname, _canUpdate, uint32(now)));
    }

    function like(uint ideaId, uint replyId) public {
        require(ideaId < count && replyId < ideas[ideaId].length);    //check if idea|reply exists
        likes[ideaId][replyId]++;
    }

    function dislike(uint ideaId, uint replyId) public {
        require(ideaId < count && replyId < ideas[ideaId].length);    //check if idea|reply exists
        likes[ideaId][replyId]--;
    }

    function reward(uint ideaId, uint replyId) payable public {
        require(ideaId < count && replyId < ideas[ideaId].length);    //check if idea|reply exists
        address payable sendto;
        sendto = ideas[ideaId][replyId].sender;
        sendto.transfer(msg.value);
        rewards[ideaId][replyId].push(Reward(msg.sender, uint256(msg.value)));
    }

    function getAllRewards(uint ideaId, uint replyId) view public returns (uint256) {
        uint256 sum;
        for (uint i = 0; i < rewards[ideaId][replyId].length; ++i) {
            sum += rewards[ideaId][replyId][i].value;
        }
        return sum;
    }

    function donate(string memory message) payable public {
        donations.push(Donation(msg.sender, message, uint256(msg.value)));
        treasury.transfer(msg.value);
    }

}