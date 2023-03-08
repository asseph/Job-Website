import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SystemProgram } from "@solana/web3.js";
import { BN } from "bn.js";
import { assert } from "chai";
import { AnchorEscrow } from "../target/types/anchor_escrow";

describe("escrow", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Escrow as Program<AnchorEscrow>;


  it("Is initialized!", async () => {
    const escrow = anchor.web3.Keypair.generate();
    const payer = anchor.web3.Keypair.generate();
    const rent = await program.provider.connection.getMinimumBalanceForRentExemption(
      100
    );

    await program.rpc.initialize(new anchor.BN(100), {
      accounts: {
        escrow, 
        tokenProgram: anchor.web3.SystemProgram.programId,
      }, 
      signers: [escrow], 
      instructions: [
        await program.account.escrow.createInstruction(escrow, rent),  
      ],
    });

    const acc = await program.account.escrow.fetch(escrow.publicKey);
    assert.ok(acc.isInitialized);
  }
  );

  it("Can deposit!", async () => {



});
