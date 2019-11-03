function matrix (r, c, r0, c0) {
    let results = [];
    const steps = Math.max(r, c) + 3;

    results.push([r0, c0]);

    c0 += 1;
    results.push([r0, c0]);

    r0 += 1;
    results.push([r0, c0]);

    for (let i = 2; i <= steps; i += 2) {
        for (let j = 1; j <= i; j++) {
            c0 -= 1;
            results.push([r0, c0]);
        }
        for (let j = 1; j <= i; j++) {
            r0 -= 1;
            results.push([r0, c0]);
        }
        for (let j = 0; j <= i; j++) {
            c0 += 1;
            results.push([r0, c0]);
        }
        for (let j = 0; j <= i; j++) {
            r0 += 1;
            results.push([r0, c0]);
        }
    }

    return results.filter((result) =>  result[0] >= 0 && result[0] < r && result[1] >= 0 && result[1] < c );
}

matrix(1, 4, 0, 0);
matrix(5, 6, 1, 4);