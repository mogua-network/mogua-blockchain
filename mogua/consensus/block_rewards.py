from mogua.util.ints import uint32, uint64

# 1 Mogua coin = 1,000,000,000,000 = 1 trillion gua.
_gua_per_mogua = 1000000000000
_blocks_per_year = 1681920  # 32 * 6 * 24 * 365


def calculate_pool_reward(height: uint32) -> uint64:
    """
    Returns the pool reward at a certain block height. The pool earns 7/8 of the reward in each block. If the farmer
    is solo farming, they act as the pool, and therefore earn the entire block reward.
    These halving events will not be hit at the exact times
    (3 years, etc), due to fluctuations in difficulty. They will likely come early, if the network space and VDF
    rates increase continuously.
    """

    if height == 0:
        return uint64(int((7 / 8) * 21000000 * _gua_per_mogua))
    elif height < (1 / 12) * _blocks_per_year:
        return uint64(int((7 / 8) * 100 * _gua_per_mogua)) #Reward for early participants in the community.
    elif height < 2 * _blocks_per_year:
        return uint64(int((7 / 8) * 20 * _gua_per_mogua))
    elif height < 4 * _blocks_per_year:
        return uint64(int((7 / 8) * 10 * _gua_per_mogua))
    elif height < 6 * _blocks_per_year:
        return uint64(int((7 / 8) * 5 * _gua_per_mogua))
    elif height < 8 * _blocks_per_year:
        return uint64(int((7 / 8) * 2.5 * _gua_per_mogua))
    else:
        return uint64(int((7 / 8) * 1.25 * _gua_per_mogua))


def calculate_base_farmer_reward(height: uint32) -> uint64:
    """
    Returns the base farmer reward at a certain block height.
    The base fee reward is 1/8 of total block reward

    Returns the coinbase reward at a certain block height. These halving events will not be hit at the exact times
    (3 years, etc), due to fluctuations in difficulty. They will likely come early, if the network space and VDF
    rates increase continuously.
    """
    if height == 0:
        return uint64(int((1 / 8) * 21000000 * _gua_per_mogua))
    elif height < (1 / 12) * _blocks_per_year:
        return uint64(int((1 / 8) * 100 * _gua_per_mogua)) #Reward for early participants in the community.
    elif height < 2 * _blocks_per_year:
        return uint64(int((1 / 8) * 20 * _gua_per_mogua))
    elif height < 4 * _blocks_per_year:
        return uint64(int((1 / 8) * 10 * _gua_per_mogua))
    elif height < 6 * _blocks_per_year:
        return uint64(int((1 / 8) * 5 * _gua_per_mogua))
    elif height < 8 * _blocks_per_year:
        return uint64(int((1 / 8) * 2.5 * _gua_per_mogua))
    else:
        return uint64(int((1 / 8) * 1.25 * _gua_per_mogua))
