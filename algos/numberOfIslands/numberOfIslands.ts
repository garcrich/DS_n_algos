function numIslands(gridMap: string[][]): number {
    function markEntireIsland(x: number, y: number) {
        let xOutOfBounds = x < 0 || x >= gridMap.length;
        let yOutOfBounds = y < 0 || y >= gridMap[0].length;
        let cellsIsWaterOrVisited = gridMap[x][y] === '0' || gridMap[x][y] === '2';

        if(xOutOfBounds ||yOutOfBounds || cellsIsWaterOrVisited ) {
            return;
        }

        gridMap[x][y] = '0';

        markEntireIsland(x - 1, y);
        markEntireIsland(x + 1, y);
        markEntireIsland(x, y - 1);
        markEntireIsland(x, y + 1);
    }

    let totalIslands = 0;

    for(let x = 0; x < gridMap.length; x++) {
        for (let y = 0; y  < gridMap[x].length; y++) {
            if (gridMap[x][y] === '1') {
                totalIslands++;
                markEntireIsland(x, y);
            }
        }
    }

    return totalIslands;
}