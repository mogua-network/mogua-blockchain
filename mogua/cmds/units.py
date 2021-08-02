from typing import Dict

# The rest of the codebase uses dogs everywhere.
# Only use these units for user facing interfaces.
units: Dict[str, int] = {
    "mogua": 10 ** 12,  # 1 mogua (MGA) is 1,000,000,000,000 gua (1 Trillion)
    "gua:": 1,
    "colouredcoin": 10 ** 3,  # 1 coloured coin is 1000 colouredcoin dogs
}
