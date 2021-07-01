function superbowlWin(record) {
    const foundGame = record.find(game => game.result === "W")
    return foundGame ? foundGame.year : undefined    
}