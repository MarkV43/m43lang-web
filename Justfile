alias b := build
alias t := test
alias c := check

build:
    wasm-pack build ../wasm --debug -d ../web/src/wasm --target bundler
    rm ./src/wasm/.gitignore

test:
    cd m43lang && cargo test

check:
    cd m43lang && cargo check

default: build
