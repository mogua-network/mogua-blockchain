from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "mogua_harvester mogua_timelord_launcher mogua_timelord mogua_farmer mogua_full_node mogua_wallet".split(),
    "node": "mogua_full_node".split(),
    "harvester": "mogua_harvester".split(),
    "farmer": "mogua_harvester mogua_farmer mogua_full_node mogua_wallet".split(),
    "farmer-no-wallet": "mogua_harvester mogua_farmer mogua_full_node".split(),
    "farmer-only": "mogua_farmer".split(),
    "timelord": "mogua_timelord_launcher mogua_timelord mogua_full_node".split(),
    "timelord-only": "mogua_timelord".split(),
    "timelord-launcher-only": "mogua_timelord_launcher".split(),
    "wallet": "mogua_wallet mogua_full_node".split(),
    "wallet-only": "mogua_wallet".split(),
    "introducer": "mogua_introducer".split(),
    "simulator": "mogua_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
