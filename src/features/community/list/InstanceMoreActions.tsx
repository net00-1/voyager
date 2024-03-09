import { IonButton, useIonActionSheet } from "@ionic/react";
import { tabletPortraitOutline } from "ionicons/icons";
import { useBuildGeneralBrowseLink } from "../../../helpers/routes";
import { useOptimizedIonRouter } from "../../../helpers/useOptimizedIonRouter";
import HeaderEllipsisIcon from "../../shared/HeaderEllipsisIcon";

export default function CommunitiesMoreActions() {
  const router = useOptimizedIonRouter();
  const buildGeneralBrowseLink = useBuildGeneralBrowseLink();
  const [presentActionSheet] = useIonActionSheet();

  function present() {
    presentActionSheet({
      cssClass: "left-align-buttons",
      buttons: [
        {
          text: "Instance Sidebar",
          icon: tabletPortraitOutline,
          handler: () => {
            router.push(buildGeneralBrowseLink("/sidebar"));
          },
        },
        {
          text: "Cancel",
          role: "cancel",
        },
      ],
    });
  }

  return (
    <IonButton onClick={present}>
      <HeaderEllipsisIcon slot="icon-only" />
    </IonButton>
  );
}
