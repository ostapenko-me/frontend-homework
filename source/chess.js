/**
 * Created by lieroz on 10.02.17.
 */

'use strict'

function chess(dimension) {
    if (dimension <= 1) {
        return null;
    }

    var chess_board = "";

    for (var i = 0; i < dimension; ++i) {

        for (var j = 0; j < dimension; ++j) {

            if (i % 2 == 0) {

                if (j % 2 == 0) {
                    chess_board += "*";

                } else {
                    chess_board += " ";
                }

            } else {

                if (j % 2 != 0) {
                    chess_board += "*";

                } else {
                    chess_board += " ";
                }
            }
        }

        chess_board += "\n";
    }

    return chess_board;
}
